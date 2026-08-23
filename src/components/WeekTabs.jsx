/**
 * Horizontal week selector tabs.
 * Each tab shows the week number and a mini progress indicator.
 * Always visible — never hidden in a menu.
 */

import React from 'react'

export default function WeekTabs({ weeks, selectedWeek, onSelectWeek, getWeekProgress }) {
  return (
    <nav className="week-tabs" aria-label="Week navigation">
      <div className="week-tabs__scroll">
        {weeks.map((week) => {
          const wp = getWeekProgress(week)
          const isActive = selectedWeek === week.number
          return (
            <button
              key={week.number}
              className={`week-tab ${isActive ? 'week-tab--active' : ''} ${wp.isComplete ? 'week-tab--complete' : ''}`}
              onClick={() => onSelectWeek(week.number)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="week-tab__number">Week {week.number}</span>
              <div className="week-tab__progress-track">
                <div
                  className="week-tab__progress-fill"
                  style={{ width: `${wp.percentage}%` }}
                />
              </div>
              <span className="week-tab__pct">
                {wp.isComplete ? '✓' : `${wp.percentage}%`}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}