const Graph = require('../../graphs/graph')
const WeightedGraph = require('../../graphs/weighted-graph')

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

    describe('#removeVertex', () => {
      it('should remove vertex from adjacency list', () => {
        graph.addVertex('Tokyo')
        graph.addVertex('Dallas')
        graph.addVertex('Toronto')
        graph.addEdge('Tokyo', 'Toronto')
        graph.addEdge('Tokyo', 'Dallas')
        graph.addEdge('Toronto', 'Dallas')
        graph.removeVertex('Tokyo')

        expect(graph.adjacencyList.Tokyo).toBeUndefined()
        expect(graph.adjacencyList.Dallas).toEqual(['Toronto'])
        expect(graph.adjacencyList.Toronto).toEqual(['Dallas'])
      })
    })

    describe('Graph Traversal', () => {
      beforeEach(() => {
        graph.addVertex('Tokyo')
        graph.addVertex('Dallas')
        graph.addVertex('Toronto')
        graph.addVertex('New York')
        graph.addVertex('Vancouver')
        graph.addVertex('Houston')

        graph.addEdge('Tokyo', 'Dallas')
        graph.addEdge('Tokyo', 'Toronto')
        graph.addEdge('Dallas', 'New York')
        graph.addEdge('Toronto', 'Vancouver')
        graph.addEdge('New York', 'Vancouver')
        graph.addEdge('New York', 'Houston')
        graph.addEdge('Vancouver', 'Houston')
      })

      describe('using Depth First Search (DFS)', () => {
        describe('#dfsRecursive', () => {
          it('should return all vertexes in the graph, recursive', () => {
            expect(graph.dfsRecursive('Tokyo')).toEqual([
              'Tokyo',
              'Dallas',
              'New York',
              'Vancouver',
              'Toronto',
              'Houston',
            ])
          })
        })

        describe('#dfsIterative', () => {
          it('should return all vertexes in the graph, iterative', () => {
            expect(graph.dfsIterative('Tokyo')).toEqual([
              'Tokyo',
              'Toronto',
              'Vancouver',
              'Houston',
              'New York',
              'Dallas',
            ])
          })
        })
      })

      describe('using Breadth-First Search (BFS)', () => {
        describe('#bfs', () => {
          it('should return all vertexes in the graph, recursive', () => {
            expect(graph.bfs('Tokyo')).toEqual([
              'Tokyo',
              'Dallas',
              'Toronto',
              'New York',
              'Vancouver',
              'Houston',
            ])
          })
        })
      })
    })
  })

  describe('for Weighted Graph', () => {
    let graph = null

    beforeEach(() => {
      graph = new WeightedGraph()
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
        graph.addEdge('Tokyo', 'Toronto', 1000)

        expect(graph.adjacencyList.Tokyo).toEqual([
          { node: 'Toronto', weight: 1000 },
        ])
        expect(graph.adjacencyList.Toronto).toEqual([
          { node: 'Tokyo', weight: 1000 },
        ])
      })
    })

    describe('#removeEdge', () => {
      it('should remove edges from adjacency list', () => {
        graph.addVertex('Tokyo')
        graph.addVertex('Dallas')
        graph.addVertex('Toronto')
        graph.addEdge('Tokyo', 'Toronto', 1000)
        graph.addEdge('Tokyo', 'Dallas', 500)
        graph.addEdge('Toronto', 'Dallas', 250)
        graph.removeEdge('Tokyo', 'Toronto')

        expect(graph.adjacencyList.Tokyo).toEqual([
          { node: 'Dallas', weight: 500 },
        ])
        expect(graph.adjacencyList.Toronto).toEqual([
          { node: 'Dallas', weight: 250 },
        ])
      })
    })

    describe('#removeVertex', () => {
      it('should remove vertex from adjacency list', () => {
        graph.addVertex('Tokyo')
        graph.addVertex('Dallas')
        graph.addVertex('Toronto')
        graph.addEdge('Tokyo', 'Toronto', 1000)
        graph.addEdge('Tokyo', 'Dallas', 500)
        graph.addEdge('Toronto', 'Dallas', 250)
        graph.removeVertex('Tokyo')

        expect(graph.adjacencyList.Tokyo).toBeUndefined()
        expect(graph.adjacencyList.Dallas).toEqual([
          { node: 'Toronto', weight: 250 },
        ])
        expect(graph.adjacencyList.Toronto).toEqual([
          { node: 'Dallas', weight: 250 },
        ])
      })
    })
  })
})
