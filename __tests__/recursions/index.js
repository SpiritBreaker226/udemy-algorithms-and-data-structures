const power = require('../../recursions/challenges/power')
const factorial = require('../../recursions/challenges/factorial')

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

  describe('for challenge factorial', () => {
    it('should be 1 for factorial 1!', () => {
      expect(factorial(1)).toEqual(1)
    })

    it('should be 2 for factorial 2!', () => {
      expect(factorial(2)).toEqual(2)
    })

    it('should be 24 for factorial 4!', () => {
      expect(factorial(4)).toEqual(24)
    })

    it('should be 5040 for factorial 7!', () => {
      expect(factorial(7)).toEqual(5040)
    })
  })
})
