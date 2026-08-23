/**
 * Custom hook for managing lesson-plan progress.
 * Persists to localStorage and supports export/import as JSON files.
 */

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'ai-youtube-progress'

// Default empty progress state
const emptyProgress = () => ({
  completedVideos: {},
  completedTasks: {},
  completedChecklist: {},
})

// Load saved progress from localStorage
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      // Validate basic shape
      if (parsed.completedVideos && parsed.completedTasks) {
        return {
          completedVideos: parsed.completedVideos || {},
          completedTasks: parsed.completedTasks || {},
          completedChecklist: parsed.completedChecklist || {},
        }
      }
    }
  } catch {
    // Ignore corrupt data
  }
  return emptyProgress()
}

export default function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // localStorage full or unavailable — fail silently
    }
  }, [progress])

  // Toggle a single video's completion
  const toggleVideo = useCallback((videoId) => {
    setProgress((prev) => ({
      ...prev,
      completedVideos: {
        ...prev.completedVideos,
        [videoId]: !prev.completedVideos[videoId],
      },
    }))
  }, [])

  // Toggle a single task's completion
  const toggleTask = useCallback((taskId) => {
    setProgress((prev) => ({
      ...prev,
      completedTasks: {
        ...prev.completedTasks,
        [taskId]: !prev.completedTasks[taskId],
      },
    }))
  }, [])

  // Toggle a weekly checklist item
  const toggleChecklist = useCallback((itemId) => {
    setProgress((prev) => ({
      ...prev,
      completedChecklist: {
        ...prev.completedChecklist,
        [itemId]: !prev.completedChecklist[itemId],
      },
    }))
  }, [])

  // Check individual items
  const isVideoComplete = useCallback(
    (videoId) => !!progress.completedVideos[videoId],
    [progress]
  )
  const isTaskComplete = useCallback(
    (taskId) => !!progress.completedTasks[taskId],
    [progress]
  )
  const isChecklistComplete = useCallback(
    (itemId) => !!progress.completedChecklist[itemId],
    [progress]
  )

  // Compute day progress (videos + task)
  const getDayProgress = useCallback(
    (day) => {
      const total = day.videos.length + 1 // +1 for the task
      const completed =
        day.videos.filter((v) => !!progress.completedVideos[v.id]).length +
        (progress.completedTasks[day.task.id] ? 1 : 0)
      return {
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        isComplete: completed === total,
      }
    },
    [progress]
  )

  // Compute week progress (all days + checklist)
  const getWeekProgress = useCallback(
    (week) => {
      let total = 0
      let completed = 0
      week.days.forEach((day) => {
        total += day.videos.length + 1
        completed += day.videos.filter((v) => !!progress.completedVideos[v.id]).length
        if (progress.completedTasks[day.task.id]) completed += 1
      })
      if (week.checklist) {
        total += week.checklist.length
        completed += week.checklist.filter((c) => !!progress.completedChecklist[c.id]).length
      }
      return {
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        isComplete: completed === total && total > 0,
      }
    },
    [progress]
  )

  // Compute overall progress across all weeks
  const getOverallProgress = useCallback(
    (lessonPlan) => {
      let total = 0
      let completed = 0
      lessonPlan.weeks.forEach((week) => {
        const wp = getWeekProgress(week)
        total += wp.total
        completed += wp.completed
      })
      return {
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      }
    },
    [getWeekProgress]
  )

  // Find the next incomplete item (for "Continue" button)
  const getNextIncomplete = useCallback(
    (lessonPlan) => {
      for (const week of lessonPlan.weeks) {
        for (const day of week.days) {
          for (const video of day.videos) {
            if (!progress.completedVideos[video.id]) {
              return {
                weekNumber: week.number,
                dayNumber: day.number,
                type: 'video',
                id: video.id,
              }
            }
          }
          if (!progress.completedTasks[day.task.id]) {
            return {
              weekNumber: week.number,
              dayNumber: day.number,
              type: 'task',
              id: day.task.id,
            }
          }
        }
        // Check weekly checklist
        if (week.checklist) {
          for (const item of week.checklist) {
            if (!progress.completedChecklist[item.id]) {
              return {
                weekNumber: week.number,
                dayNumber: null,
                type: 'checklist',
                id: item.id,
              }
            }
          }
        }
      }
      return null // Everything complete
    },
    [progress]
  )

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(emptyProgress())
  }, [])

  // Export progress as a downloadable JSON file
  const exportProgress = useCallback(() => {
    const data = {
      version: 1,
      exportDate: new Date().toISOString(),
      ...progress,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-progress-backup.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [progress])

  // Import progress from a JSON string; returns true on success
  const importProgress = useCallback((jsonString) => {
    try {
      const data = JSON.parse(jsonString)
      if (data.completedVideos && data.completedTasks) {
        setProgress({
          completedVideos: data.completedVideos || {},
          completedTasks: data.completedTasks || {},
          completedChecklist: data.completedChecklist || {},
        })
        return true
      }
      return false
    } catch {
      return false
    }
  }, [])

    /**
   * Replace the entire progress state at once.
   * Used by cloud sync to load merged data from the cloud.
   */
  const loadAllProgress = useCallback((updater) => {
    // Accept either a new object or an updater function
    setProgress(updater);
  }, []);

  return {
    progress,
    toggleVideo,
    toggleTask,
    toggleChecklist,
    isVideoComplete,
    isTaskComplete,
    isChecklistComplete,
    getDayProgress,
    getWeekProgress,
    getOverallProgress,
    getNextIncomplete,
    resetProgress,
    exportProgress,
    importProgress,
    loadAllProgress, // Expose the new function for cloud sync
  }
}