// Create a stack from a Linked List

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  pop() {
    if (this.size === 0) return null

    const node = this.first

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = node.next

      node.next = null
    }

    this.size--

    return node.value
  }

  push(value) {
    const node = new Node(value)

    if (this.size === 0) {
      this.last = node
    } else {
      node.next = this.first
    }

    this.first = node
    this.size++

    return this.size
  }
}
