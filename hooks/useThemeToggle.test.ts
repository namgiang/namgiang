import { renderHook, act } from '@testing-library/react'
import useThemeToggle from './useThemeToggle'

describe('useThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query !== '(prefers-color-scheme: dark)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
  })

  it('should initialize with light theme', () => {
    const { result } = renderHook(() => useThemeToggle())
    expect(result.current.theme).toBe('light')
  })

  it('should toggle theme between light and dark', () => {
    const { result } = renderHook(() => useThemeToggle())
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('should use localStorage theme if available', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useThemeToggle())
    expect(result.current.theme).toBe('dark')
  })

  it('should initialize with dark theme if system setting is dark', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
    const { result } = renderHook(() => useThemeToggle())
    expect(result.current.theme).toBe('dark')
  })
})
