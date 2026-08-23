/**
 * Displays the selected week's content:
 * - Week title, goal, and progress bar
 * - Vertical timeline of DayCards
 * - Weekly milestones checklist
 */

import React from 'react'
import DayCard from './DayCard'
import ProgressBar from './ProgressBar'

export default function WeekView({
  week,
  weekProgress,
  getDayProgress,
  isVideoComplete,
  isTaskComplete,
  isChecklistComplete,
  onToggleVideo,
  onToggleTask,
  onToggleChecklist,
  nextIncomplete,
}) {
  return (
    <section className="week-view" aria-label={`Week ${week.number}`}>
      {/* Week header */}
      <div className="week-view__header">
        <h2 className="week-view__title">
          Week {week.number}: {week.title}
        </h2>
        <p className="week-view__goal">{week.goal}</p>
        <ProgressBar
          percentage={weekProgress.percentage}
          label={`Week progress: ${weekProgress.completed} of ${weekProgress.total}`}
        />
      </div>

      {/* Day timeline */}
      <div className="week-view__timeline">
        {week.days.map((day) => {
          const dp = getDayProgress(day)
          const isCurrent =
            nextIncomplete &&
            nextIncomplete.weekNumber === week.number &&
            nextIncomplete.dayNumber === day.number
          return (
            <DayCard
              key={day.number}
              day={day}
              dayProgress={dp}
              isVideoComplete={isVideoComplete}
              isTaskComplete={isTaskComplete}
              onToggleVideo={onToggleVideo}
              onToggleTask={onToggleTask}
              isCurrent={isCurrent}
            />
          )
        })}
      </div>

      {/* Weekly milestones checklist */}
      {week.checklist && week.checklist.length > 0 && (
        <div className="week-view__checklist">
          <h3 className="week-view__checklist-title">Weekly Milestones</h3>
          <p className="week-view__checklist-desc">
            Check these off as you feel confident in each skill.
          </p>
          <ul className="checklist">
            {week.checklist.map((item) => {
              const done = isChecklistComplete(item.id)
              return (
                <li key={item.id} className={`checklist__item ${done ? 'checklist__item--done' : ''}`}>
                  <button
                    className={`check-btn check-btn--small ${done ? 'check-btn--checked' : ''}`}
                    onClick={() => onToggleChecklist(item.id)}
                    aria-label={done ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {done && <span className="check-btn__icon">✓</span>}
                  </button>
                  <span className="checklist__text">{item.description}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </section>
  )
}