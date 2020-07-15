const power = require('../../recursions/challenges/power')
const factorial = require('../../recursions/challenges/factorial')
const productOfArray = require('../../recursions/challenges/product-of-array')
const recursiveRange = require('../../recursions/challenges/recursive-range')
const fib = require('../../recursions/challenges/fib')
const fibDynamicProgramming = require('../../recursions/dynamic-programming/fib')

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

  describe('for challenge product of array', () => {
    it('should be 6 for product of array [1,2,3]', () => {
      expect(productOfArray([1, 2, 3])).toEqual(6)
    })

    it('should be 60 for product of array [1,2,3,10]', () => {
      expect(productOfArray([1, 2, 3, 10])).toEqual(60)
    })
  })

  describe('for challenge recursive range', () => {
    it('should be 21 for sum upto 6', () => {
      expect(recursiveRange(6)).toEqual(21)
    })

    it('should be 55 for sum upto 10', () => {
      expect(recursiveRange(10)).toEqual(55)
    })
  })

  describe('for challenge fib', () => {
    // fib(35) //

    it('should be 3 for fib 4', () => {
      expect(fib(4)).toEqual(3)
    })

    it('should be 55 for fib 10', () => {
      expect(fib(10)).toEqual(55)
    })

    it('should be 317811 for fib 28', () => {
      expect(fib(28)).toEqual(317811)
    })

    it('should be 9227465 for fib 35', () => {
      expect(fib(35)).toEqual(9227465)
    })
  })

  describe('for Dynamic Programming', () => {
    describe('using example fib', () => {
      it('should be 3 for fib 4', () => {
        expect(fibDynamicProgramming(4)).toEqual(3)
      })

      it('should be 55 for fib 10', () => {
        expect(fibDynamicProgramming(10)).toEqual(55)
      })

      it('should be 317811 for fib 28', () => {
        expect(fibDynamicProgramming(28)).toEqual(317811)
      })

      it('should be 9227465 for fib 35', () => {
        expect(fibDynamicProgramming(35)).toEqual(9227465)
      })

      it('should be 354224848179262000000 for fib 100', () => {
        expect(fibDynamicProgramming(100)).toEqual(354224848179262000000)
      })
    })
  })
})
