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

    describe('#addEdge', () => {
      it('should add edges to the adjacency list', () => {
        graph.addVertex('Tokyo')
        graph.addVertex('Toronto')
        graph.addEdge('Tokyo', 'Toronto')

        expect(graph.adjacencyList.Tokyo).toEqual(['Toronto'])
        expect(graph.adjacencyList.Toronto).toEqual(['Tokyo'])
      })
    })

    describe('#removeEdge', () => {
      it('should remove edges from adjacency list', () => {
        graph.addVertex('Tokyo')
        graph.addVertex('Dallas')
        graph.addVertex('Toronto')
        graph.addEdge('Tokyo', 'Toronto')
        graph.addEdge('Tokyo', 'Dallas')
        graph.addEdge('Toronto', 'Dallas')
        graph.removeEdge('Tokyo', 'Toronto')

        expect(graph.adjacencyList.Tokyo).toEqual(['Dallas'])
        expect(graph.adjacencyList.Toronto).toEqual(['Dallas'])
      })
    })
  })
})
