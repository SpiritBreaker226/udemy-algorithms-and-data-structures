const countUniqueValues = require('../../problem-solving/multiple-pointers-challenge/count-unique')

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
})
