import { useEffect, useState, useRef, useCallback } from 'react'
import useTheme from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { current, cycle, setById, presets } = useTheme()
  const [visible, setVisible] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      if (params.has('theme')) {
        const val = params.get('theme')
        if (val && val !== 'panel' && val !== '') setById(val)
        return true
      }
    } catch { /* SSR safety */ }
    return false
  })
  const [toast, setToast] = useState<string | null>(null)
  const keyBuffer = useRef<string[]>([])
  const bufferTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const toggle = useCallback(() => setVisible((v) => !v), [])

  useEffect(() => {
    const handler = () => toggle()
    window.addEventListener('btx-toggle-theme', handler)
    return () => window.removeEventListener('btx-toggle-theme', handler)
  }, [toggle])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        setVisible(false)
        return
      }
      if (visible) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); cycle(1) }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); cycle(-1) }
        return
      }
      clearTimeout(bufferTimer.current)
      keyBuffer.current.push(e.key.toLowerCase())
      if (keyBuffer.current.length > 5) keyBuffer.current.shift()
      bufferTimer.current = setTimeout(() => { keyBuffer.current = [] }, 1500)
      if (keyBuffer.current.slice(-3).join('') === 'btx') {
        keyBuffer.current = []
        setVisible(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cycle, visible])

  useEffect(() => {
    setToast(current.id)
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [current])

  return (
    <>
      {/* Hidden trigger: click the invisible dot at bottom-right corner */}
      <button
        onClick={toggle}
        className="fixed bottom-3 right-3 w-3 h-3 rounded-full opacity-0 hover:opacity-30 z-[200] transition-opacity cursor-default"
        style={{ backgroundColor: current.colors[400] }}
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Toast notification */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[100] pointer-events-none transition-all duration-300"
          style={{ transform: 'translateX(-50%)', opacity: toast ? 1 : 0 }}
        >
          <div className="px-4 py-2 rounded-lg border shadow-xl flex items-center gap-3"
            style={{ backgroundColor: 'rgba(21,39,68,0.95)', borderColor: 'rgba(38,64,96,0.4)' }}>
            <div className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: current.colors[900] }} />
            <span className="text-xs font-mono" style={{ color: '#c4d1e0' }}>{current.id}</span>
            <span className="text-xs" style={{ color: '#546e8f' }}>|</span>
            <span className="text-xs" style={{ color: '#8fa4bd' }}>{current.label}</span>
          </div>
        </div>
      )}

      {/* Full panel */}
      {visible && (
        <div
          className="fixed top-20 right-4 z-[200] w-72 rounded-xl shadow-2xl overflow-hidden border"
          style={{
            backgroundColor: 'rgba(15,29,50,0.98)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(38,64,96,0.4)',
          }}
        >
          <div className="px-4 py-3 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(38,64,96,0.3)' }}>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#c4d1e0' }}>Theme</span>
            <button
              onClick={() => setVisible(false)}
              className="text-xs transition-colors hover:text-white"
              style={{ color: '#546e8f' }}
            >
              ESC
            </button>
          </div>
          <div className="p-3 space-y-1.5 max-h-[60vh] overflow-y-auto">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setById(preset.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all"
                style={{
                  backgroundColor: current.id === preset.id ? 'rgba(0,212,170,0.1)' : 'transparent',
                  border: current.id === preset.id ? '1px solid rgba(0,212,170,0.3)' : '1px solid transparent',
                }}
              >
                <div className="flex gap-0.5 shrink-0">
                  {[preset.colors[900], preset.colors[700], preset.colors[500]].map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-sm border border-white/10"
                      style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate" style={{ color: '#edf1f7' }}>{preset.label}</div>
                  <div className="font-mono" style={{ fontSize: '10px', color: '#546e8f' }}>{preset.id}</div>
                </div>
                {current.id === preset.id && (
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#00d4aa' }} />
                )}
              </button>
            ))}
          </div>
          <div className="px-4 py-2.5" style={{ borderTop: '1px solid rgba(38,64,96,0.3)', backgroundColor: 'rgba(21,39,68,0.3)' }}>
            <div className="space-y-0.5" style={{ fontSize: '10px', color: '#546e8f' }}>
              <div>Type <kbd style={{ color: '#8fa4bd' }}>btx</kbd> to open · click corner dot</div>
              <div><kbd style={{ color: '#8fa4bd' }}>←/→ ↑/↓</kbd> cycle themes</div>
              <div><kbd style={{ color: '#8fa4bd' }}>Esc</kbd> close panel</div>
              <div>URL: <kbd style={{ color: '#8fa4bd' }}>?theme</kbd> or <kbd style={{ color: '#8fa4bd' }}>?theme=id</kbd></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
