'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const useThemeToggle = () => {
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
    localStorage.theme = theme === 'dark' ? 'light' : 'dark'
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    document.documentElement.classList.toggle('dark')
  }

  return { theme, toggleTheme }
}

export default useThemeToggle
