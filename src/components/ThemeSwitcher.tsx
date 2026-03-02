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
  const panelRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => setVisible((v) => !v), [])

  useEffect(() => {
    const handler = () => toggle()
    window.addEventListener('btx-toggle-theme', handler)
    return () => window.removeEventListener('btx-toggle-theme', handler)
  }, [toggle])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (visible && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setVisible(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [visible])

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

  const selectTheme = (id: string) => {
    setById(id)
    setVisible(false)
  }

  return (
    <>
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[100] pointer-events-none transition-all duration-300"
          style={{ transform: 'translateX(-50%)', opacity: toast ? 1 : 0 }}
        >
          <div className="px-3 py-1.5 rounded-md border shadow-xl flex items-center gap-2"
            style={{ backgroundColor: 'rgba(21,39,68,0.95)', borderColor: 'rgba(38,64,96,0.4)' }}>
            <div className="w-2.5 h-2.5 rounded-full border border-white/20"
              style={{ backgroundColor: current.colors[900] }} />
            <span className="text-xs font-mono" style={{ color: '#c4d1e0' }}>{current.id}</span>
          </div>
        </div>
      )}

      {visible && (
        <div
          ref={panelRef}
          className="fixed top-16 right-4 z-[200] w-52 rounded-lg shadow-2xl overflow-hidden border"
          style={{
            backgroundColor: 'rgba(15,29,50,0.98)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(38,64,96,0.4)',
          }}
        >
          <div className="py-1.5 max-h-[70vh] overflow-y-auto">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => selectTheme(preset.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors hover:bg-white/5"
                style={{
                  backgroundColor: current.id === preset.id ? 'rgba(0,212,170,0.08)' : undefined,
                }}
              >
                <div className="flex gap-0.5 shrink-0">
                  {[preset.colors[900], preset.colors[700], preset.colors[500]].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm border border-white/10"
                      style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-xs font-medium truncate" style={{ color: current.id === preset.id ? '#00d4aa' : '#c4d1e0' }}>
                  {preset.label}
                </span>
                {current.id === preset.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#00d4aa' }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
