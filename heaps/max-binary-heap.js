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

  // Instructor solution to compare
  // extractMax() {
  //   //  Edget case come back to this
  //   const max = this.values[0]
  //   const end = this.values.pop()

  //   if (this.values.length > 0) {
  //     this.values[0] = end
  //     this.sinkDown()
  //   }

  //   return max
  // }

  // Instructor solution to compare use with extractMax()
  // sinkDown() {
  //   let index = 0
  //   const length = this.values.length
  //   const element = this.values[0]

  //   while (true) {
  //     let leftIndex = index * 2 + 1
  //     let rightIndex = index * 2 + 2
  //     let leftChild
  //     let rightChild
  //     let swap = null

  //     if (leftIndex < length) {
  //       leftChild = this.values[leftIndex]

  //       if (leftChild > element) {
  //         swap = leftIndex
  //       }
  //     }

  //     if (rightIndex < length) {
  //       rightChild = this.values[rightIndex]

  //       if (
  //         (swap === null && rightChild > element) ||
  //         (swap !== null && rightChild > leftChild)
  //       ) {
  //         swap = rightIndex
  //       }
  //     }

  //     if (swap === null) break

  //     this.swap(swap, index)

  //     index = swap
  //   }
  // }

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
