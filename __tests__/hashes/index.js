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

    describe('#get', () => {
      let hash = null

      beforeEach(() => {
        hash = new HashTable()

        hash.set('cyan', '#00FFFF')
        hash.set('orange', '#FF4500')
        hash.set('gray', '#999')
        hash.set('white', '#fff')
        hash.set('black', '#000')
        hash.set('red', '#FF0000')
      })

      it('should get one element to hash table', () => {
        const colour = hash.get('black')

        expect(colour).toEqual('#000')
      })

      it('should get undefiend when no element is found', () => {
        expect(hash.get('green')).toBeUndefined()
      })

      describe('on collations', () => {
        it('should get red on a merge collotion', () => {
          hash = new HashTable(2)

          hash.set('red', '#FF0000')
          hash.set('white', '#fff')
          hash.set('black', '#000')

          expect(hash.keyMap[1].length).toEqual(3)

          const colour = hash.get('white')

          expect(colour).toEqual('#fff')
        })
      })
    })

    describe('#keys', () => {
      it('should get one element to hash table', () => {
        const hash = new HashTable()

        hash.set('cyan', '#00FFFF')
        hash.set('orange', '#FF4500')
        hash.set('gray', '#999')
        hash.set('white', '#fff')
        hash.set('black', '#000')
        hash.set('red', '#FF0000')

        expect(hash.keys()).toEqual([
          'white',
          'black',
          'gray',
          'red',
          'cyan',
          'orange',
        ])
      })
    })
  })
})
