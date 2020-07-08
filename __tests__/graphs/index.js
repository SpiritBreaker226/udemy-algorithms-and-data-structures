const Graph = require('../../graphs/graph')

describe('graphs', () => {
  describe('for Graph', () => {
    let graph = null

    beforeEach(() => {
      graph = new Graph()
    })

    describe('#addVertex', () => {
      it('should add one node to the adjacency list', () => {
        graph.addVertex('Tokyo')

        expect(graph.adjacencyList.Tokyo).toEqual([])
      })

      it('should return error message of already in use', () => {
        graph.addVertex('Tokyo')

        expect(graph.addVertex('Tokyo')).toContain('already in')
      })

      describe('on blank node key', () => {
        it('should return undefined and not nothing should add to adjacency list', () => {
          expect(graph.addVertex()).toBeUndefined()
          expect(graph.adjacencyList).toEqual({})
        })
      })
    })
  })
})
