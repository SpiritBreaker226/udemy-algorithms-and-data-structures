const HashTable = require('../../hashes/hash-table')

describe('hashes', () => {
  describe('for Hash Table', () => {
    describe('#set', () => {
      let hash = null

      beforeEach(() => {
        hash = new HashTable(2)
      })

      it('should add one element to hash table', () => {
        hash.set('red', '#FF0000')

        expect(hash.keyMap[1]).toEqual([['red', '#FF0000']])
      })

      describe('on collations', () => {
        it('should two elements to the same index', () => {
          hash.set('red', '#FF0000')
          hash.set('black', '#000')

          expect(hash.keyMap[1].length).toEqual(2)
        })
      })
    })
  })
})
