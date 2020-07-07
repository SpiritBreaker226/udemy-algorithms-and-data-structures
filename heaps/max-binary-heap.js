class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values
  }

  insert(value) {
    this.values.push(value)

    return this.bubbleUp(value)
  }

  extractMax() {
    if (this.values.length > 0) {
      this.swap(this.values.length - 1, 0)
    }

    // remove the root form the heap and redcue time compliety
    const root = this.values.pop()

    // TODO: find is calling function or create a variable better space complexity
    this.sinkDown()

    return root
  }

  bubbleUp(value) {
    let index = this.values.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.values[parentIndex]

      if (value <= parent) break

      this.swap(index, parentIndex)

      index = parentIndex
    }

    return this.values
  }

  sinkDown() {
    let parentIndex = 0

    while (true) {
      const swapIndex = this.useLeftOrRightIndex(parentIndex)

      if (!swapIndex) break
      if (this.values[swapIndex] <= this.values[parentIndex]) break

      this.swap(swapIndex, parentIndex)

      parentIndex = swapIndex
    }
  }

  swap(index, parentIndex) {
    const value = this.values[index]
    const parentValue = this.values[parentIndex]

    this.values[parentIndex] = value
    this.values[index] = parentValue
  }

  useLeftOrRightIndex(parentIndex) {
    const leftIndex = parentIndex * 2 + 1
    const rightIndex = parentIndex * 2 + 2

    if (leftIndex < this.values.length && rightIndex < this.values.length) {
      return this.values[leftIndex] > this.values[rightIndex]
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

module.exports = MaxBinaryHeap
