const linearSearch = require('../../searching/linear-search')
const binarySearch = require('../../searching/binary-search')

describe('searching', () => {
  describe('for linear', () => {
    it('should return index 1', () => {
      expect(linearSearch([10, 15, 20, 25, 30], 15)).toEqual(1)
    })

    it('should return index 5', () => {
      expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5)
    })

    it('should return index 0', () => {
      expect(linearSearch([100], 100)).toEqual(0)
    })

    it('should return index -1', () => {
      expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
    })

    it('should return index -1', () => {
      expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1)
    })

    it('should return index -1', () => {
      expect(linearSearch([100], 200)).toEqual(-1)
    })
  })

  describe('for binary', () => {
    it('should return index 1', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1)
    })

    it('should return index 2', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2)
    })

    it('should return index 4', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4)
    })

    it('should return index -1', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
    })

    it('should return index 2', () => {
      expect(
        binarySearch(
          [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            98,
            99,
          ],
          10
        )
      ).toEqual(2)
    })

    it('should return index 16', () => {
      expect(
        binarySearch(
          [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            98,
            99,
          ],
          95
        )
      ).toEqual(16)
    })

    it('should return index -1', () => {
      expect(
        binarySearch(
          [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            98,
            99,
          ],
          100
        )
      ).toEqual(-1)
    })
  })
})
