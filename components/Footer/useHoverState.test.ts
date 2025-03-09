import { renderHook, act } from '@testing-library/react'
import useHoverState from './useHoverState'

describe('useHoverState', () => {
  it('should initialize with null hover position', () => {
    const { result } = renderHook(() => useHoverState())
    expect(result.current.currentHoverPosition).toBeNull()
  })

  it('should set hover position on mouse enter', () => {
    const { result } = renderHook(() => useHoverState())
    act(() => {
      result.current.onMouseEnter(5)
    })
    expect(result.current.currentHoverPosition).toBe(5)
  })

  it('should reset hover position on mouse leave', () => {
    const { result } = renderHook(() => useHoverState())
    act(() => {
      result.current.onMouseEnter(5)
      result.current.onMouseLeave()
    })
    expect(result.current.currentHoverPosition).toBeNull()
  })
})
