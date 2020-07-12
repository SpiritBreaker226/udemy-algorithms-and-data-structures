// Time: O(N * log(N)) becausee we are sorting the enenqueu each time with a
// sort not great sorting algorithm

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    this.values.push({ value, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

module.exports = PriorityQueue
