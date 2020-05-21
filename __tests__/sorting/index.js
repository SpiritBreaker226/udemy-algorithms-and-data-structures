const bubbleSort = require('../../sorting/bubble-sort')

describe('sorting', () => {
  describe('for bubble sort', () => {
    it('should return a sorted short array', () => {
      expect(bubbleSort([22, 1, 44, 32, 22, 15])).toEqual([
        1,
        15,
        22,
        22,
        32,
        44,
      ])
    })

    it('should return a sorted large array', () => {
      expect(bubbleSort([100, 50, 82, 69, 25, 99, 32, 75, 45, 10])).toEqual([
        10,
        25,
        32,
        45,
        50,
        69,
        75,
        82,
        99,
        100,
      ])
    })
  })
})
