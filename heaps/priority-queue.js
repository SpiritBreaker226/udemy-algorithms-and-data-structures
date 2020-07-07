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
}

module.exports = PriorityQueue
