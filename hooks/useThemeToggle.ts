'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<Theme | null>('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme
    if (localTheme) {
      setTheme(localTheme)
      return
    }
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (systemSettingDark.matches) {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const animateToggleTheme = () => {
    if (!document.startViewTransition) toggleTheme()
    document.startViewTransition(toggleTheme)
  }
  return { theme, toggleTheme: animateToggleTheme }
}
