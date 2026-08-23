/**
 * A single video entry with:
 * - Large checkbox to mark as watched
 * - Title as a clickable link (opens in new tab)
 * - "Rewatch" badge when applicable
 * - Optional inline YouTube embed toggle
 */

import React, { useState } from 'react'

export default function VideoItem({ video, isComplete, onToggle }) {
  const [showEmbed, setShowEmbed] = useState(false)

  const handleVideoLinkClick = () => {
    if (!isComplete) onToggle()
  }

  return (
    <div className={`video-item ${isComplete ? 'video-item--done' : ''}`}>
      {/* Large, accessible checkbox */}
      <button
        className={`check-btn ${isComplete ? 'check-btn--checked' : ''}`}
        onClick={onToggle}
        aria-label={isComplete ? 'Mark as not watched' : 'Mark as watched'}
        title={isComplete ? 'Mark as not watched' : 'Mark as watched'}
      >
        {isComplete && <span className="check-btn__icon">✓</span>}
      </button>

      <div className="video-item__info">
        <div className="video-item__title-row">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="video-item__link"
            onClick={handleVideoLinkClick}
          >
            {video.title}
          </a>
          {video.isRewatch && <span className="badge badge--rewatch">Rewatch</span>}
          {isComplete && <span className="badge badge--done">Watched</span>}
        </div>

        {video.description && (
          <p className="video-item__desc">{video.description}</p>
        )}

        <div className="video-item__actions">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--small btn--outline"
            onClick={handleVideoLinkClick}
          >
            Open on YouTube ↗
          </a>
          {video.embedId && (
            <button
              className="btn btn--small btn--outline"
              onClick={() => setShowEmbed((s) => !s)}
            >
              {showEmbed ? 'Hide Video' : 'Watch Here ▶'}
            </button>
          )}
        </div>

        {/* Inline YouTube embed (loaded on demand) */}
        {showEmbed && video.embedId && (
          <div className="video-embed">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.embedId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  )
}