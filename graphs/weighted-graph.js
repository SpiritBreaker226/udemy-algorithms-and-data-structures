class WeightedGraph {
  constructor() {
    /**
     * Holds edges and its weight in a format of
     * {
     *    "node": [{
     *      node: "contiunied to",
     *      weight: number
     *    }]
     * }
     * i.e. { "A": [{  node: "B", weight: 10}] }
     */
    this.adjacencyList = {}
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    })
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    })
  }

  addVertex(vertex) {
    if (!vertex) return undefined
    if (this.adjacencyList[vertex]) return `${vertex} already in the list`

    this.adjacencyList[vertex] = []

    return vertex
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex.node != vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex.node != vertex1
    )
  }

  removeVertex(removingVertex) {
    this.adjacencyList[removingVertex].forEach((vertex) => {
      this.removeEdge(removingVertex, vertex.node)
    })

    delete this.adjacencyList[removingVertex]
  }
}

module.exports = WeightedGraph
