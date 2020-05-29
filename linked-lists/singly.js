// piece of data - value
// reference to next node - next

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  pop() {
    if (this.length === 0) return undefined

    this.length--

    const currentTail = this.tail
    let preTailNode = null
    let currentNode = this.head

    while (currentNode.next) {
      preTailNode = currentNode
      currentNode = currentNode.next
    }

    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      this.tail = preTailNode
      this.tail.next = null
    }

    return currentTail
  }

  push(value) {
    const node = new Node(value)

    if (this.length === 0) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.length++

    return this.list
  }
}
