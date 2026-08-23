/**
 * Accessible progress bar with percentage label.
 * Uses both color AND text to convey status (never color alone).
 */

import React from 'react'

export default function ProgressBar({ percentage, label, size = 'default' }) {
  const clamped = Math.max(0, Math.min(100, percentage))
  const isComplete = clamped === 100

  return (
    <div className={`progress-bar progress-bar--${size}`}>
      {label && <span className="progress-bar__label">{label}</span>}
      <div className="progress-bar__track" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100} aria-label={label || 'Progress'}>
        <div
          className={`progress-bar__fill ${isComplete ? 'progress-bar__fill--complete' : ''}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="progress-bar__text">
        {isComplete ? '✓ Complete' : `${clamped}%`}
      </span>
    </div>
  )
}