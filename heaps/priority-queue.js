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

      this.swap(index, parentIndex)

      index = parentIndex
    }
  }

  dequeue() {
    if (this.values.length > 0) {
      this.swap(this.values.length - 1, 0)
    }

    const rootNode = this.values.pop()

    this.sinkDown()

    return rootNode
  }

  sinkDown() {
    let parentIndex = 0

    while (true) {
      const swapIndex = this.useLeftOrRightIndex(parentIndex)
      const parentNode = this.values[parentIndex]

      if (!swapIndex) break
      if (this.values[swapIndex].priority >= parentNode.priority) {
        break
      }

      this.swap(swapIndex, parentIndex)

      parentIndex = swapIndex
    }
  }

  swap(index, parentIndex) {
    const node = this.values[index]
    const parentNode = this.values[parentIndex]

    this.values[parentIndex] = node
    this.values[index] = parentNode
  }

  useLeftOrRightIndex(parentIndex) {
    const leftIndex = parentIndex * 2 + 1
    const rightIndex = parentIndex * 2 + 2

    if (leftIndex < this.values.length && rightIndex < this.values.length) {
      return this.values[leftIndex].priority < this.values[rightIndex].priority
        ? leftIndex
        : rightIndex
    }

    if (leftIndex < this.values.length) {
      return leftIndex
    } else if (rightIndex < this.values.length) {
      return rightIndex
    }

    return null
  }
}

module.exports = PriorityQueue
