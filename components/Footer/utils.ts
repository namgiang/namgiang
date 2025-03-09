import { NAV_ITEMS_COUNT } from './constants'

export const calculateAnimateScale = (
  currentHoverPosition: number | null,
  position: number
) => {
  if (currentHoverPosition === null) {
    return 1
  }

  const scale =
    Math.round(
      (2 - (Math.abs(currentHoverPosition - position) + 1) / NAV_ITEMS_COUNT) *
        100
    ) / 100

  return position === currentHoverPosition ? 1.8 : scale
}
