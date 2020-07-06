class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values
  }

  insert(value) {
    this.values.push(value)

    return this.bubbleUp(value)
  }

  bubbleUp(value) {
    let index = this.values.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.values[parentIndex]

      if (value <= parent) break

      this.values[parentIndex] = value
      this.values[index] = parent

      index = parentIndex
    }

    return this.values
  }
}

module.exports = MaxBinaryHeap
