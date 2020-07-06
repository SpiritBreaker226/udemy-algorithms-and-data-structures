const BinarySearchTree = require('../../trees/binary-search-tree')

describe('trees', () => {
  describe('for Binary Search Tree (BST)', () => {
    let bst = null

    beforeEach(() => {
      bst = new BinarySearchTree()
    })

    describe('#insert', () => {
      it('should root value of the BST', () => {
        bst.insert(10)

        expect(bst.root.value).toEqual(10)
      })

      it('should return the values of left', () => {
        bst.insert(10)
        bst.insert(9)

        expect(bst.root.left.value).toEqual(9)
      })

      it('should return the values of right', () => {
        bst.insert(10)
        bst.insert(12)

        expect(bst.root.right.value).toEqual(12)
      })

      it('should return the values of left and right', () => {
        bst.insert(10)
        bst.insert(9)
        bst.insert(12)

        expect(bst.root.left.value).toEqual(9)
        expect(bst.root.right.value).toEqual(12)
      })

      describe('on equal values', () => {
        it('should return undefiend', () => {
          bst.insert(10)
          bst.insert(12)

          expect(bst.insert(12)).toBeUndefined()
        })
      })

      it('should return the all values on more than 1 level of left and right', () => {
        bst.insert(10)
        bst.insert(9)
        bst.insert(12)
        bst.insert(15)
        bst.insert(11)
        bst.insert(22)
        bst.insert(1)

        expect(bst.root.left.left.value).toEqual(1)
        expect(bst.root.right.right.value).toEqual(15)
        expect(bst.root.right.right.right.value).toEqual(22)
        expect(bst.root.right.left.value).toEqual(11)
      })
    })

    describe('#find', () => {
      beforeEach(() => {
        bst.insert(10)
        bst.insert(9)
        bst.insert(12)
        bst.insert(15)
        bst.insert(11)
        bst.insert(22)
        bst.insert(1)
      })

      it('should root value of the BST', () => {
        expect(bst.find(10).value).toEqual(10)
      })

      it('should return the lowest value', () => {
        expect(bst.find(1).value).toEqual(1)
      })

      it('should return the highest value', () => {
        expect(bst.find(22).value).toEqual(22)
      })

      it('should return the parent value', () => {
        expect(bst.find(12).value).toEqual(12)
      })

      describe('on does not equal values', () => {
        it('should return null', () => {
          expect(bst.find(42)).toBeUndefined()
        })
      })
    })

    describe('for tree traversal', () => {
      beforeEach(() => {
        bst.insert(10)
        bst.insert(6)
        bst.insert(3)
        bst.insert(8)
        bst.insert(15)
        bst.insert(20)
      })

      describe('#bfs', () => {
        it('should return every value in a BFS style', () => {
          expect(bst.bfs()).toEqual([10, 6, 15, 3, 8, 20])
        })
      })
    })
  })
})
