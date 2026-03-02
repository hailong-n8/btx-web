import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useTheme from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { current, cycle, setById, presets } = useTheme()
  const [visible, setVisible] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault()
        setVisible((v) => !v)
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'ArrowRight') {
        e.preventDefault()
        cycle(1)
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'ArrowLeft') {
        e.preventDefault()
        cycle(-1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cycle])

  useEffect(() => {
    setToast(current.id)
    const t = setTimeout(() => setToast(null), 2000)
    return () => clearTimeout(t)
  }, [current])

  return (
    <>
      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          >
            <div className="px-4 py-2 rounded-lg bg-btx-700/95 backdrop-blur-md border border-btx-500/40 shadow-xl flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full border border-white/20"
                style={{ backgroundColor: current.colors[900] }}
              />
              <span className="text-xs text-btx-100 font-mono">{current.id}</span>
              <span className="text-xs text-btx-300">|</span>
              <span className="text-xs text-btx-200">{current.label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full panel */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-20 right-4 z-[100] w-72 bg-btx-800/98 backdrop-blur-xl border border-btx-500/40 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-btx-500/30 flex items-center justify-between">
              <span className="text-xs font-semibold text-btx-100 uppercase tracking-wider">Theme</span>
              <button
                onClick={() => setVisible(false)}
                className="text-btx-300 hover:text-btx-100 text-xs transition-colors"
              >
                ESC
              </button>
            </div>
            <div className="p-3 space-y-1.5 max-h-[60vh] overflow-y-auto">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setById(preset.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                    current.id === preset.id
                      ? 'bg-accent/10 border border-accent/30'
                      : 'hover:bg-btx-600/50 border border-transparent'
                  }`}
                >
                  <div className="flex gap-0.5 shrink-0">
                    {[preset.colors[900], preset.colors[700], preset.colors[500]].map((c, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-sm border border-white/10"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-btx-50 truncate">{preset.label}</div>
                    <div className="text-[10px] font-mono text-btx-300">{preset.id}</div>
                  </div>
                  {current.id === preset.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  )}
                </button>
              ))}
            </div>
            <div className="px-4 py-2.5 border-t border-btx-500/30 bg-btx-700/30">
              <div className="text-[10px] text-btx-300 space-y-0.5">
                <div><kbd className="text-btx-200">Ctrl+Shift+T</kbd> toggle panel</div>
                <div><kbd className="text-btx-200">Ctrl+Shift+←/→</kbd> cycle themes</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
