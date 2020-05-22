const bubbleSort = require('../../sorting/bubble-sort')
const selectionSort = require('../../sorting/selection-sort')
const insertionSort = require('../../sorting/insertion-sort')
const { mergeSort, merge } = require('../../sorting/merge-sort')

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

  describe('for selection sort', () => {
    it('should return a sorted short array', () => {
      expect(selectionSort([29, 6, 54, 39, 28, 19])).toEqual([
        6,
        19,
        28,
        29,
        39,
        54,
      ])
    })

    it('should return a sorted large array', () => {
      expect(selectionSort([100, 50, 82, 69, 25, 99, 32, 75, 45, 10])).toEqual([
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

  describe('for insertion sort', () => {
    it('should return a sorted short array', () => {
      expect(insertionSort([29, 6, 54, 39, 28, 19])).toEqual([
        6,
        19,
        28,
        29,
        39,
        54,
      ])
    })

    it('should return a sorted large array', () => {
      expect(insertionSort([100, 50, 82, 69, 25, 99, 32, 75, 45, 10])).toEqual([
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

    describe('for merge sort', () => {
      it('should return a sorted short array', () => {
        expect(mergeSort([29, 6, 54, 39, 28, 19, 25])).toEqual([
          6,
          19,
          25,
          28,
          29,
          39,
          54,
        ])
      })

      it('should return a sorted large array', () => {
        expect(
          mergeSort([100, 50, 82, 69, 25, 77, 99, 32, 75, 45, 10])
        ).toEqual([10, 25, 32, 45, 50, 69, 75, 77, 82, 99, 100])
      })

      describe('on merging', () => {
        describe('when the right side array is larger', () => {
          it('should return a sorted array', () => {
            expect(merge([1, 3, 50], [5, 42, 99, 100])).toEqual([
              1,
              3,
              5,
              42,
              50,
              99,
              100,
            ])
          })
        })

        describe('when the left side array is larger', () => {
          it('should return a sorted array', () => {
            expect(merge([1, 3, 20, 42, 50, 89], [5, 42, 99, 100])).toEqual([
              1,
              3,
              5,
              20,
              42,
              42,
              50,
              89,
              99,
              100,
            ])
          })
        })

        describe('when both arrays are equal', () => {
          it('should return a sorted array', () => {
            expect(merge([1, 3, 42, 50], [5, 42, 99, 100])).toEqual([
              1,
              3,
              5,
              42,
              42,
              50,
              99,
              100,
            ])
          })
        })
      })
    })
  })
})
