import { useEffect, useState, useRef } from 'react'
import useTheme from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { current, cycle } = useTheme()
  const [toast, setToast] = useState<string | null>(null)
  const keyBuffer = useRef<string[]>([])
  const bufferTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return
      }
      clearTimeout(bufferTimer.current)
      keyBuffer.current.push(e.key.toLowerCase())
      if (keyBuffer.current.length > 5) keyBuffer.current.shift()
      bufferTimer.current = setTimeout(() => { keyBuffer.current = [] }, 1500)
      if (keyBuffer.current.slice(-3).join('') === 'btx') {
        keyBuffer.current = []
        window.dispatchEvent(new CustomEvent('btx-toggle-theme'))
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cycle])

  useEffect(() => {
    setToast(current.id)
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [current])

  if (!toast) return null

  return (
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
  )
}
