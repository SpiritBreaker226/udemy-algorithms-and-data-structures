const MaxBinaryHeap = require('../../heaps/max-binary-heap')

describe('heaps', () => {
  describe('for Binary Heap', () => {
    let mbh = null

    beforeEach(() => {
      mbh = new MaxBinaryHeap()
    })

    describe('#insert', () => {
      it('should return the values', () => {
        mbh.insert(10)
        mbh.insert(9)
        mbh.insert(12)

        expect(mbh.values).toEqual([12, 9, 10])
      })

      describe('on equal values', () => {
        it('should return double values in the array', () => {
          mbh.insert(10)
          mbh.insert(9)
          mbh.insert(12)
          mbh.insert(12)

          expect(mbh.values).toEqual([12, 12, 10, 9])
        })
      })

      it('should return all values', () => {
        mbh.insert(10)
        mbh.insert(9)
        mbh.insert(12)
        mbh.insert(15)
        mbh.insert(11)
        mbh.insert(22)
        mbh.insert(1)

        expect(mbh.values).toEqual([22, 12, 15, 9, 11, 10, 1])
      })
    })
  })
})
