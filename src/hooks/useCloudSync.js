/**
 * useCloudSync.js
 * Silent background sync to a private GitHub Gist.
 * - Auto-loads cloud progress on page open (merges with local).
 * - Auto-saves 1 second after the last change.
 * - Token is collected once via a native browser prompt, then stored in localStorage.
 * - No UI components — this hook does everything behind the scenes.
 */

import { useEffect, useRef, useCallback } from 'react';

const TOKEN_KEY = 'gh-sync-token';
const GIST_ID_KEY = 'gh-sync-gist-id';
const GIST_DESCRIPTION = 'AI-to-YouTube Learning Tracker Progress';
const GIST_FILENAME = 'progress.json';
const SAVE_DELAY_MS = 1000;

export function useCloudSync(localProgress, setLocalProgress) {
  const token = useRef(localStorage.getItem(TOKEN_KEY) || '');
  const gistId = useRef(localStorage.getItem(GIST_ID_KEY) || '');
  const saveTimer = useRef(null);
  const didLoad = useRef(false);
  const skipSave = useRef(false);

  /* ── merge two progress objects (union of all completed items) ── */
  const merge = useCallback((a, b) => {
    const m = { completedVideos: {}, completedTasks: {}, completedChecklist: {} };
    new Set([...Object.keys(a.completedVideos || {}), ...Object.keys(b.completedVideos || {})])
      .forEach((k) => { m.completedVideos[k] = !!(a.completedVideos?.[k] || b.completedVideos?.[k]); });
    new Set([...Object.keys(a.completedTasks || {}), ...Object.keys(b.completedTasks || {})])
      .forEach((k) => { m.completedTasks[k] = !!(a.completedTasks?.[k] || b.completedTasks?.[k]); });
    new Set([...Object.keys(a.completedChecklist || {}), ...Object.keys(b.completedChecklist || {})])
      .forEach((k) => { m.completedChecklist[k] = !!(a.completedChecklist?.[k] || b.completedChecklist?.[k]); });
    return m;
  }, []);

  /* ── save current progress to gist ── */
  const saveToCloud = useCallback(async (data) => {
    if (!token.current) return;
    try {
      const body = {
        description: GIST_DESCRIPTION,
        public: false,
        files: { [GIST_FILENAME]: { content: JSON.stringify(data) } },
      };
      const url = gistId.current
        ? `https://api.github.com/gists/${gistId.current}`
        : 'https://api.github.com/gists';
      const res = await fetch(url, {
        method: gistId.current ? 'PATCH' : 'POST',
        headers: {
          Authorization: `token ${token.current}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) return;
      const result = await res.json();
      if (!gistId.current) {
        gistId.current = result.id;
        localStorage.setItem(GIST_ID_KEY, result.id);
      }
    } catch (e) {
      console.warn('Cloud sync save failed:', e.message);
    }
  }, []);

  /* ── load progress from gist and merge ── */
  const loadFromCloud = useCallback(async () => {
    if (!token.current) return;
    try {
      let gid = gistId.current;

      // Find existing gist if we don't have the ID
      if (!gid) {
        const listRes = await fetch('https://api.github.com/gists?per_page=100', {
          headers: { Authorization: `token ${token.current}` },
        });
        if (!listRes.ok) return;
        const gists = await listRes.json();
        const found = gists.find(
          (g) => g.description === GIST_DESCRIPTION && g.files?.[GIST_FILENAME]
        );
        if (!found) return; // No cloud backup yet — nothing to load
        gid = found.id;
        gistId.current = gid;
        localStorage.setItem(GIST_ID_KEY, gid);
      }

      const res = await fetch(`https://api.github.com/gists/${gid}`, {
        headers: { Authorization: `token ${token.current}` },
      });
      if (!res.ok) return;
      const gist = await res.json();
      const file = gist.files?.[GIST_FILENAME];
      if (!file) return;

      const cloudData = JSON.parse(file.content);
      if (cloudData?.completedVideos && cloudData?.completedTasks) {
        skipSave.current = true; // don't re-save what we just loaded
        setLocalProgress((prev) => merge(prev, cloudData));
      }
    } catch (e) {
      console.warn('Cloud sync load failed:', e.message);
    }
  }, [setLocalProgress, merge]);

  /* ── on first mount: prompt for token if needed, then load ── */
  useEffect(() => {
    if (didLoad.current) return;

    if (!token.current) {
      const entered = window.prompt(
        'Enter your GitHub Personal Access Token to sync progress across browsers.\n\n' +
        'The token needs the "gist" scope. Leave blank to use this browser only.'
      );
      if (!entered?.trim()) return;
      token.current = entered.trim();
      localStorage.setItem(TOKEN_KEY, token.current);
    }

    didLoad.current = true;
    loadFromCloud();
  }, [loadFromCloud]);

  /* ── debounced auto-save whenever localProgress changes ── */
  useEffect(() => {
    if (!token.current || !didLoad.current) return;

    if (skipSave.current) {
      skipSave.current = false;
      return;
    }

    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveToCloud(localProgress);
    }, SAVE_DELAY_MS);

    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, [localProgress, saveToCloud]);
}