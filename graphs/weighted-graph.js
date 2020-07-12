const PriorityQueue = require('../heaps/priority-queue-array')

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

  shortestPath(startVertex, endVertex) {
    const distances = {}
    const previous = {}
    const queue = new PriorityQueue()

    let smallest = {}

    Object.keys(this.adjacencyList).forEach((vertex) => {
      distances[vertex] = startVertex === vertex ? 0 : Infinity
      previous[vertex] = null
    })

    queue.enqueue(startVertex, 0)

    while (queue.values.length > 0) {
      smallest = queue.dequeue().value

      if (smallest === endVertex) break

      this.adjacencyList[smallest].forEach((neighborVertex) => {
        const sum = neighborVertex.weight + distances[smallest]

        if (
          distances[neighborVertex.node] === Infinity ||
          sum < distances[neighborVertex.node]
        ) {
          distances[neighborVertex.node] = sum
          previous[neighborVertex.node] = smallest

          queue.enqueue(neighborVertex.node, sum)
        }
      })

      // Instructor solution to compare
      // if (smallest && distances[smallest] !== Infinity) {
      //   for (let neighbor in this.adjacencyList[smallest]) {
      //     // find neighboring node
      //     let nextNode = this.adjacencyList[smallest][neighbor]

      //     //  caluclate new distance to neighbor node
      //     let candidate = distances[smallest] + nextNode.weight

      //     let nextNeighbor = nextNode.node

      //     if (candidate < distances[nextNeighbor]) {
      //       // updateing new smallest distance to neighbor
      //       distances[nextNeighbor] = candidate

      //       // updating previous - How we got to neighbor
      //       previous[nextNeighbor] = smallest

      //       // enqueue in priority queue with new priority
      //       queue.enqueue(nextNeighbor, candidate)
      //     }
      //   }
      // }
    }

    return previous
  }
}

module.exports = WeightedGraph
