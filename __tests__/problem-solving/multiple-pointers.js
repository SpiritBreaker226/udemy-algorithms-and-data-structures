const countUniqueValues = require('../../problem-solving/multiple-pointers-challenge/count-unique')
const areThereDuplicates = require('../../problem-solving/multiple-pointers-challenge/are-there-duplicates')
const averagePair = require('../../problem-solving/multiple-pointers-challenge/average-pair')
const isSubsequence = require('../../problem-solving/multiple-pointers-challenge/is-subsequence')

describe('multiple pointers', () => {
  describe('for challenge count unique', () => {
    it('should return 2', () => {
      expect(countUniqueValues([1, 1, 1, 1, 1, 1, 2])).toEqual(2)
    })

    it('should return 7', () => {
      expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7)
    })

    it('should return 0', () => {
      expect(countUniqueValues([])).toEqual(0)
    })

    it('should return 4', () => {
      expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4)
    })
  })

  describe('for challenge are there duplicates', () => {
    it('should be false for not having duplicates', () => {
      expect(areThereDuplicates(1, 2, 3)).toBeFalsy()
    })

    it('should be true for having duplicate numbers', () => {
      expect(areThereDuplicates(1, 2, 2)).toBeTruthy()
    })

    it('should be true for having duplicate letters', () => {
      expect(areThereDuplicates('a', 'b', 'c', 'd', 'a')).toBeTruthy()
    })
  })

  describe('for challenge are average pair', () => {
    it('should be true for matching any of the small input array', () => {
      expect(averagePair([1, 2, 3], 2.5)).toBeTruthy()
    })

    it('should be true for matching any of the large input array', () => {
      expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy()
    })

    it('should be false for not matching any of the input array', () => {
      expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy()
    })

    it('should be false for empty array', () => {
      expect(averagePair([], 4)).toBeFalsy()
    })
  })

  describe('for challenge isSubsequence', () => {
    it('should be true for simple word', () => {
      // expect(isSubsequence('hello', 'hello world')).toBeTruthy()
    })

    it('should be true for smaller', () => {
      expect(isSubsequence('sing', 'sting')).toBeTruthy()
    })

    it('should be true for large string', () => {
      expect(isSubsequence('abc', 'abracaddabra')).toBeTruthy()
    })

    it('should be false for misorder string', () => {
      expect(isSubsequence('abc', 'acb')).toBeFalsy()
    })
  })
})
