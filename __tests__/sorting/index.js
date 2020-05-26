const bubbleSort = require('../../sorting/bubble-sort')
const selectionSort = require('../../sorting/selection-sort')
const insertionSort = require('../../sorting/insertion-sort')
const { mergeSort, merge } = require('../../sorting/merge-sort')
const { quickSort, pivotHelper } = require('../../sorting/quick-sort')
const { digitCount, getDigit, mostDigits } = require('../../sorting/radix-sort')

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

    describe('for quick sort', () => {
      it('should return a sorted short array', () => {
        expect(quickSort([29, 6, 54, 39, 28, 19, 25])).toEqual([
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
          quickSort([100, 50, 82, 69, 25, 77, 99, 32, 75, 45, 10])
        ).toEqual([10, 25, 32, 45, 50, 69, 75, 77, 82, 99, 100])
      })

      describe('on pivot helper', () => {
        it('should return index of pivot', () => {
          const numbers = [45, 50, 82, 25, 77, 32, 75, 10]

          expect(pivotHelper(numbers)).toEqual(3)
          expect(numbers).toEqual([10, 25, 32, 45, 77, 82, 75, 50])
        })
      })
    })

    describe('for radix sort', () => {
      describe('on getDigit', () => {
        it('should return zero when place does not exist', () => {
          expect(getDigit(1, 2)).toEqual(0)
        })

        it('should return right side digit', () => {
          expect(getDigit(12345, 1)).toEqual(4)
        })
      })

      describe('on digitCount', () => {
        it('should return 1 on zero', () => {
          expect(digitCount(0)).toEqual(1)
        })

        it('should return 1', () => {
          expect(digitCount(1)).toEqual(1)
        })

        it('should return 25', () => {
          expect(digitCount(25)).toEqual(2)
        })

        it('should return 1234', () => {
          expect(digitCount(1234)).toEqual(4)
        })
      })

      describe('on mostDigits', () => {
        it('should return 4', () => {
          expect(mostDigits([1234, 56, 7])).toEqual(4)
        })

        it('should return 5', () => {
          expect(mostDigits([1, 11111, 1])).toEqual(5)
        })

        it('should return 2', () => {
          expect(mostDigits([12, 34, 56, 78])).toEqual(2)
        })
      })
    })
  })
})
