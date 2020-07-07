const MaxBinaryHeap = require('../../heaps/max-binary-heap')
const PriorityQueue = require('../../heaps/priority-queue')

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

    describe('#extractMax', () => {
      it('should return the values', () => {
        const oldRoot = mbh.extractMax()

        expect(oldRoot).toEqual(41)
        expect(mbh.values).toEqual([39, 27, 33, 18])
      })

      it('should return the values for a larger heap', () => {
        mbh = new MaxBinaryHeap([
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

        expect(mbh.extractMax()).toEqual(42)
        expect(mbh.values).toEqual([
          41,
          39,
          33,
          18,
          27,
          10,
          9,
          12,
          15,
          11,
          22,
          1,
        ])

        expect(mbh.extractMax()).toEqual(41)
        expect(mbh.values).toEqual([39, 27, 33, 18, 22, 10, 9, 12, 15, 11, 1])

        expect(mbh.extractMax()).toEqual(39)
        expect(mbh.values).toEqual([33, 27, 10, 18, 22, 1, 9, 12, 15, 11])
      })
    })

    describe('on last element', () => {
      it('should be empty', () => {
        mbh = new MaxBinaryHeap([12])

        expect(mbh.extractMax()).toEqual(12)
        expect(mbh.values).toEqual([])
      })
    })
  })

  describe('for Priority Queue', () => {
    let queue = null

    beforeEach(() => {
      queue = new PriorityQueue()
    })

    describe('#enqueue', () => {
      it('should return the values', () => {
        queue.enqueue('flu', 3)
        queue.enqueue('gunshot', 1)
        queue.enqueue('break leg', 2)
        queue.enqueue('fall off roof', 1)

        expect(queue.values[0].priority).toEqual(1)
        expect(queue.values[1].priority).toEqual(1)
        expect(queue.values[2].priority).toEqual(2)
        expect(queue.values[3].priority).toEqual(3)
      })
    })

    describe('#dequeue', () => {
      describe('with a queue', () => {
        beforeEach(() => {
          queue.enqueue('flu', 3)
          queue.enqueue('break leg', 2)
          queue.enqueue('fall off roof', 1)
          queue.enqueue('flu', 3)
          queue.enqueue('gunshot', 1)
        })

        it('should remove root and return it', () => {
          expect(queue.dequeue()).toEqual({
            value: 'fall off roof',
            priority: 1,
          })

          expect(queue.values[0].priority).toEqual(1)
          expect(queue.values[1].priority).toEqual(3)
          expect(queue.values[2].priority).toEqual(2)
          expect(queue.values[3].priority).toEqual(3)
        })

        it('should remove and return root each time', () => {
          queue.dequeue()

          expect(queue.dequeue()).toEqual({
            value: 'gunshot',
            priority: 1,
          })
          expect(queue.values[0].priority).toEqual(2)
          expect(queue.values[1].priority).toEqual(3)
          expect(queue.values[2].priority).toEqual(3)

          expect(queue.dequeue()).toEqual({
            value: 'break leg',
            priority: 2,
          })
          expect(queue.values[0].priority).toEqual(3)
          expect(queue.values[1].priority).toEqual(3)
        })
      })

      describe('on last element', () => {
        it('should be empty', () => {
          queue.enqueue('flu', 3)

          queue.dequeue()

          expect(queue.values).toEqual([])
        })
      })
    })
  })
})
