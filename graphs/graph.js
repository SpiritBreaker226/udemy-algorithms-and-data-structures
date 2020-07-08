class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!vertex) return undefined
    if (this.adjacencyList[vertex]) return `${vertex} already in the list`

    this.adjacencyList[vertex] = []

    return vertex
  }
}

module.exports = Graph
