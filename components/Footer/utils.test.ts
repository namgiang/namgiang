import { calculateAnimateScale } from './utils'

describe('calculateAnimateScale', () => {
  it('should return 1 when currentHoverPosition is null', () => {
    expect(calculateAnimateScale(null, 0)).toBe(1)
    expect(calculateAnimateScale(null, 1)).toBe(1)
  })

  it('should return 1.8 when position matches currentHoverPosition', () => {
    expect(calculateAnimateScale(0, 0)).toBe(1.8)
    expect(calculateAnimateScale(1, 1)).toBe(1.8)
  })

  it('should return the correct scale when position does not match currentHoverPosition', () => {
    expect(calculateAnimateScale(0, 1)).toBeCloseTo(1.33)
    expect(calculateAnimateScale(1, 0)).toBeCloseTo(1.33)
    expect(calculateAnimateScale(2, 0)).toBeCloseTo(1)
    expect(calculateAnimateScale(0, 2)).toBeCloseTo(1)
  })
})
