import { useState } from 'react'

const useHoverState = () => {
  const [currentHoverPosition, setCurrentPosition] = useState<number | null>(
    null
  )

  return {
    currentHoverPosition,
    onMouseEnter: (position: number) => setCurrentPosition(position),
    onMouseLeave: () => setCurrentPosition(null),
  }
}

export default useHoverState
