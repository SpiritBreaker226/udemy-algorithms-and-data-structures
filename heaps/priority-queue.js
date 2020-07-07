class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(values = []) {
    this.values = values
  }

  enqueue(value, priority) {
    const node = new Node(value, priority)

    this.values.push(node)

    let index = this.values.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parentNode = this.values[parentIndex]

      if (node.priority >= parentNode.priority) break

      this.values[parentIndex] = node
      this.values[index] = parentNode

      index = parentIndex
    }
  }
}

module.exports = PriorityQueue
