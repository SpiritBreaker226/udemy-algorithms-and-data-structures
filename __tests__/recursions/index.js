const power = require('../../recursions/challenges/power')

describe('recursions', () => {
  describe('for challenge power', () => {
    it('should be 1 for 2 power of zero', () => {
      expect(power(2, 0)).toEqual(1)
    })

    it('should be 4 for 2 power of two', () => {
      expect(power(2, 2)).toEqual(4)
    })

    it('should be 16 for 2 power of four', () => {
      expect(power(2, 4)).toEqual(16)
    })
  })
})
