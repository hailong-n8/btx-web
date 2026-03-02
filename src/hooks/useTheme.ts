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
    label: 'CME Navy (Default)',
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
    id: 'deep-ocean',
    label: 'Deep Ocean',
    colors: {
      900: '#06101a',
      800: '#0a1929',
      700: '#0f2338',
      600: '#142e47',
      500: '#1e3f5e',
      400: '#305878',
      300: '#4a7291',
      200: '#7fa3bf',
      100: '#b8cfdf',
      50: '#e8eff5',
    },
  },
  {
    id: 'midnight',
    label: 'Midnight Black',
    colors: {
      900: '#040711',
      800: '#070b14',
      700: '#0d1321',
      600: '#111827',
      500: '#1e293b',
      400: '#334155',
      300: '#475569',
      200: '#94a3b8',
      100: '#cbd5e1',
      50: '#f1f5f9',
    },
  },
  {
    id: 'charcoal',
    label: 'Charcoal Steel',
    colors: {
      900: '#111318',
      800: '#16181f',
      700: '#1e2029',
      600: '#262833',
      500: '#33353f',
      400: '#464854',
      300: '#5e6070',
      200: '#9496a3',
      100: '#c6c8d0',
      50: '#eff0f2',
    },
  },
  {
    id: 'ice-dark',
    label: 'ICE Corporate',
    colors: {
      900: '#0a0f1e',
      800: '#0e152a',
      700: '#141d38',
      600: '#1a2646',
      500: '#25345b',
      400: '#384a72',
      300: '#506289',
      200: '#8496b3',
      100: '#bbc6d8',
      50: '#eaeff5',
    },
  },
  {
    id: 'slate-blue',
    label: 'Slate Blue',
    colors: {
      900: '#0f1729',
      800: '#131c33',
      700: '#1a2542',
      600: '#212f52',
      500: '#2d3d64',
      400: '#41537a',
      300: '#5a6d92',
      200: '#8e9db8',
      100: '#c2cbd9',
      50: '#edf0f5',
    },
  },
  {
    id: 'ice-light',
    label: 'ICE Light',
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
  {
    id: 'nix-light',
    label: 'NIX Warm Light',
    colors: {
      900: '#fafbfd',
      800: '#f1f3f7',
      700: '#e5e8ef',
      600: '#d5dae4',
      500: '#bcc3d2',
      400: '#8d96aa',
      300: '#5c6780',
      200: '#3a4560',
      100: '#1f2b42',
      50: '#0d1525',
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
