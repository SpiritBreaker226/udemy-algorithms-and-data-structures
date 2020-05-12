const countUniqueValues = require('../../problem-solving/multiple-pointers-challenge/count-unique')
const areThereDuplicates = require('../../problem-solving/multiple-pointers-challenge/are-there-duplicates')

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
})
