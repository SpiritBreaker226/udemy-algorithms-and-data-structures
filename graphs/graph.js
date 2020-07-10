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

  dfsIterative(startingVertex) {
    const stack = [startingVertex]
    const visited = {}
    const results = []
    let vertex = ''

    visited[startingVertex] = true

    while (stack.length > 0) {
      vertex = stack.pop()
      results.push(vertex)

      this.adjacencyList[vertex].forEach((neighborVertex) => {
        if (!visited[neighborVertex]) {
          visited[neighborVertex] = true

          stack.push(neighborVertex)
        }
      })
    }

    return results
  }

  dfsRecursive(startingVertex) {
    const results = []
    const visited = {}
    const dfs = (vertex) => {
      if (!vertex) return

      results.push(vertex)
      visited[vertex] = true

      this.adjacencyList[vertex].forEach((neighborVertex) => {
        if (!visited[neighborVertex]) {
          dfs(neighborVertex)
        }
      })

      return
    }

    dfs(startingVertex)

    return results
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex != vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex != vertex1
    )
  }

  removeVertex(removingVertex) {
    this.adjacencyList[removingVertex].forEach((vertex) => {
      this.removeEdge(removingVertex, vertex)
    })

    delete this.adjacencyList[removingVertex]
  }
}

module.exports = Graph
