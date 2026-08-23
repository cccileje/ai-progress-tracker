/**
 * Main application component.
 * Manages week selection and wires up all child components.
 */

import React, { useState, useCallback } from 'react'
import lessonPlan from './data/lessonPlan'
import useProgress from './hooks/useProgress'
import { useCloudSync } from './hooks/useCloudSync';
import Header from './components/Header'
import WeekTabs from './components/WeekTabs'
import WeekView from './components/WeekView'
import ConfirmModal from './components/ConfirmModal'

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [showResetModal, setShowResetModal] = useState(false)
  const [importMessage, setImportMessage] = useState(null)

  const {
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
  } = useProgress()

  useCloudSync(progress, loadAllProgress);
  
  // Derived data
  const overallProgress = getOverallProgress(lessonPlan)
  const nextIncomplete = getNextIncomplete(lessonPlan)
  const currentWeek = lessonPlan.weeks.find((w) => w.number === selectedWeek)

  // "Continue where you left off" — switch week and scroll to day
  const handleContinue = useCallback(() => {
    if (!nextIncomplete) return
    setSelectedWeek(nextIncomplete.weekNumber)
    // Scroll to the day card after render
    if (nextIncomplete.dayNumber) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`day-${nextIncomplete.dayNumber}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    }
  }, [nextIncomplete])

  // Reset with confirmation
  const handleReset = useCallback(() => {
    setShowResetModal(true)
  }, [])

  const confirmReset = useCallback(() => {
    resetProgress()
    setShowResetModal(false)
    setSelectedWeek(1)
  }, [resetProgress])

  // Import handler
  const handleImport = useCallback(
    (jsonString) => {
      const success = importProgress(jsonString)
      setImportMessage(success ? 'Progress loaded successfully!' : 'Could not load that file. Please check the format.')
      setTimeout(() => setImportMessage(null), 4000)
    },
    [importProgress]
  )

  return (
    <div className="app">
      <div className="app__navigation">
        <Header
          overallProgress={overallProgress}
          nextIncomplete={nextIncomplete}
          onContinue={handleContinue}
          onExport={exportProgress}
          onImport={handleImport}
          onReset={handleReset}
        />
      </div>

      <WeekTabs
        weeks={lessonPlan.weeks}
        selectedWeek={selectedWeek}
        onSelectWeek={setSelectedWeek}
        getWeekProgress={getWeekProgress}
      />

      {importMessage && (
        <div className="toast" role="status">
          {importMessage}
        </div>
      )}

      <main className="main">
        {currentWeek && (
          <WeekView
            key={currentWeek.number}
            week={currentWeek}
            weekProgress={getWeekProgress(currentWeek)}
            getDayProgress={getDayProgress}
            isVideoComplete={isVideoComplete}
            isTaskComplete={isTaskComplete}
            isChecklistComplete={isChecklistComplete}
            onToggleVideo={toggleVideo}
            onToggleTask={toggleTask}
            onToggleChecklist={toggleChecklist}
            nextIncomplete={nextIncomplete}
          />
        )}
      </main>

      <footer className="footer">
        <p>Your progress is saved automatically in your browser. Use "Download Backup" to keep a copy.</p>
      </footer>

      <ConfirmModal
        isOpen={showResetModal}
        title="Reset All Progress?"
        message="This will uncheck every video, task, and milestone across all 8 weeks. This cannot be undone. Are you sure?"
        onConfirm={confirmReset}
        onCancel={() => setShowResetModal(false)}
      />
    </div>
  )
}