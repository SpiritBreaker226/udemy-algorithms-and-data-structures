class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    // for a directed graph you would not add the
    // below connection as adding edges in that type
    // of graph is done once
    this.adjacencyList[vertex2].push(vertex1)
  }

  addVertex(vertex) {
    if (!vertex) return undefined
    if (this.adjacencyList[vertex]) return `${vertex} already in the list`

    this.adjacencyList[vertex] = []

    return vertex
  }
}

module.exports = Graph
