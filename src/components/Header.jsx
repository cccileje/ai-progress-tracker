/**
 * App header with:
 * - Title
 * - Overall progress bar
 * - "Continue" button (jumps to next incomplete item)
 * - Export / Import / Reset buttons
 */

import React, { useRef } from 'react'
import ProgressBar from './ProgressBar'

export default function Header({
  overallProgress,
  nextIncomplete,
  onContinue,
  onExport,
  onImport,
  onReset,
}) {
  const fileInputRef = useRef(null)

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      onImport(event.target.result)
    }
    reader.readAsText(file)
    // Reset input so the same file can be re-imported
    e.target.value = ''
  }

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__title-group">
          <h1 className="header__title">Learning AI and YouTube</h1>
          <p className="header__subtitle">8-Week Progress Tracker</p>
        </div>

        <div className="header__actions">
          {nextIncomplete && (
            <button className="btn btn--primary btn--continue" onClick={onContinue}>
              Continue Where You Left Off →
            </button>
          )}
          {!nextIncomplete && overallProgress.percentage === 100 && (
            <span className="header__congrats">🎉 All done — congratulations!</span>
          )}
        </div>
      </div>

      <div className="header__progress-row">
        <ProgressBar
          percentage={overallProgress.percentage}
          label={`Overall: ${overallProgress.completed} of ${overallProgress.total} items`}
        />
      </div>

      <div className="header__toolbar">
        <button className="btn btn--small btn--outline" onClick={onExport}>
          ↓ Download Backup
        </button>
        <button className="btn btn--small btn--outline" onClick={handleImportClick}>
          ↑ Load Backup
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
        <button className="btn btn--small btn--danger-outline" onClick={onReset}>
          Reset All Progress
        </button>
      </div>
    </header>
  )
}