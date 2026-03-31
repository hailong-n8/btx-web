import { useState, useEffect, useCallback } from 'react'

export interface ThemePreset {
  id: string
  label: string
  colors: {
    900: string
    800: string
    700: string
    600: string
    500: string
    400: string
    300: string
    200: string
    100: string
    50: string
  }
}

export const themePresets: ThemePreset[] = [
  {
    id: 'cme-navy',
    label: 'Dark',
    colors: {
      900: '#0b1628',
      800: '#0f1d32',
      700: '#152744',
      600: '#1b3155',
      500: '#264060',
      400: '#3b5578',
      300: '#546e8f',
      200: '#8fa4bd',
      100: '#c4d1e0',
      50: '#edf1f7',
    },
  },
  {
    id: 'ice-light',
    label: 'Light',
    colors: {
      900: '#ffffff',
      800: '#f5f7fa',
      700: '#eaeff5',
      600: '#dde3ec',
      500: '#c5ccda',
      400: '#97a3b6',
      300: '#64748b',
      200: '#3b4963',
      100: '#1e2d45',
      50: '#0a1628',
    },
  },
]

const STORAGE_KEY = 'btx-theme-id'

function applyTheme(preset: ThemePreset) {
  const root = document.documentElement
  const c = preset.colors
  const levels = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50] as const
  for (const level of levels) {
    root.style.setProperty(`--color-btx-${level}`, c[level])
  }
}

function getInitialTheme(): ThemePreset {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const found = themePresets.find((t) => t.id === stored)
      if (found) return found
    }
  } catch {}
  return themePresets[0]
}

export default function useTheme() {
  const [current, setCurrent] = useState<ThemePreset>(getInitialTheme)

  useEffect(() => {
    applyTheme(current)
    try { localStorage.setItem(STORAGE_KEY, current.id) } catch {}
  }, [current])

  const cycle = useCallback((direction: 1 | -1 = 1) => {
    setCurrent((prev) => {
      const idx = themePresets.findIndex((t) => t.id === prev.id)
      const next = (idx + direction + themePresets.length) % themePresets.length
      return themePresets[next]
    })
  }, [])

  const setById = useCallback((id: string) => {
    const found = themePresets.find((t) => t.id === id)
    if (found) setCurrent(found)
  }, [])

  return { current, cycle, setById, presets: themePresets }
}
