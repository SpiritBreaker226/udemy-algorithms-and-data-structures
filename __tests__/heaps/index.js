const MaxBinaryHeap = require('../../heaps/max-binary-heap')

describe('heaps', () => {
  describe('for Binary Heap', () => {
    let mbh = null

    beforeEach(() => {
      mbh = new MaxBinaryHeap([41, 39, 33, 18, 27])
    })

    describe('#insert', () => {
      it('should return the values', () => {
        mbh.insert(10)
        mbh.insert(9)
        mbh.insert(12)

        expect(mbh.values).toEqual([41, 39, 33, 18, 27, 10, 9, 12])
      })

      describe('on equal values', () => {
        it('should return double values in the array', () => {
          mbh.insert(10)
          mbh.insert(9)
          mbh.insert(12)
          mbh.insert(12)

          expect(mbh.values).toEqual([41, 39, 33, 18, 27, 10, 9, 12, 12])
        })
      })

      it('should return all values', () => {
        mbh.insert(10)
        mbh.insert(9)
        mbh.insert(12)
        mbh.insert(15)
        mbh.insert(11)
        mbh.insert(22)
        mbh.insert(42)
        mbh.insert(1)

        expect(mbh.values).toEqual([
          42,
          39,
          41,
          18,
          27,
          33,
          9,
          12,
          15,
          11,
          22,
          10,
          1,
        ])
      })
    })
  })
})
