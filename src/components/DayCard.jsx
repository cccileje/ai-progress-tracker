/**
 * A single day card showing:
 * - Day number node (on the vertical timeline)
 * - Title, learning goal, estimated time
 * - Video list with checkboxes
 * - Task with checkbox
 * - Notes and checkpoint callouts
 * - Day-level progress indicator
 */

import React from 'react'
import VideoItem from './VideoItem'
import ProgressBar from './ProgressBar'

export default function DayCard({
  day,
  dayProgress,
  isVideoComplete,
  isTaskComplete,
  onToggleVideo,
  onToggleTask,
  isCurrent,
}) {
  const isComplete = dayProgress.isComplete

  return (
    <div
      id={`day-${day.number}`}
      className={`day-card ${isComplete ? 'day-card--complete' : ''} ${isCurrent ? 'day-card--current' : ''}`}
    >
      {/* Timeline node */}
      <div className="day-card__node">
        <div className={`timeline-node ${isComplete ? 'timeline-node--done' : isCurrent ? 'timeline-node--current' : ''}`}>
          {isComplete ? '✓' : day.number}
        </div>
        <div className="timeline-line" />
      </div>

      {/* Card content */}
      <div className="day-card__body">
        <div className="day-card__header">
          <h3 className="day-card__title">
            Day {day.number}: {day.title}
          </h3>
          {isComplete && <span className="badge badge--done">Day Complete</span>}
          {isCurrent && !isComplete && <span className="badge badge--current">Continue Here</span>}
        </div>

        <p className="day-card__goal">{day.learningGoal}</p>
        <p className="day-card__time">Estimated time: {day.estimatedTime}</p>

        {/* Progress bar for this day */}
        <ProgressBar percentage={dayProgress.percentage} size="small" />

        {/* Videos */}
        {day.videos.length > 0 && (
          <div className="day-card__section">
            <h4 className="day-card__section-title">Videos to Watch</h4>
            {day.videos.map((video) => (
              <VideoItem
                key={video.id}
                video={video}
                isComplete={isVideoComplete(video.id)}
                onToggle={() => onToggleVideo(video.id)}
              />
            ))}
          </div>
        )}

        {day.videos.length === 0 && (
          <div className="day-card__section">
            <p className="day-card__no-videos">No videos for this day — focus on the task below.</p>
          </div>
        )}

        {/* Task */}
        <div className="day-card__section">
          <h4 className="day-card__section-title">Today's Task</h4>
          <div className={`task-item ${isTaskComplete(day.task.id) ? 'task-item--done' : ''}`}>
            <button
              className={`check-btn ${isTaskComplete(day.task.id) ? 'check-btn--checked' : ''}`}
              onClick={() => onToggleTask(day.task.id)}
              aria-label={isTaskComplete(day.task.id) ? 'Mark task as incomplete' : 'Mark task as complete'}
            >
              {isTaskComplete(day.task.id) && <span className="check-btn__icon">✓</span>}
            </button>
            <span className="task-item__text">{day.task.description}</span>
          </div>
        </div>

        {/* Notes */}
        {day.notes && (
          <div className="day-card__note">
            <strong>Note:</strong> {day.notes}
          </div>
        )}

        {/* Checkpoint */}
        {day.checkpoint && (
          <div className="day-card__checkpoint">
            <strong>Checkpoint:</strong> {day.checkpoint}
          </div>
        )}
      </div>
    </div>
  )
}