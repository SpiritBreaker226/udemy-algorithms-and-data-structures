// piece of data - value
// reference to next node - next
// reference to previous node - prev

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  pop() {
    if (this.length === 0) return undefined

    const currentTail = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail.prev.next = null
      this.tail = this.tail.prev

      currentTail.prev = null
    }

    this.length--

    return currentTail
  }

  push(value) {
    const node = new Node(value)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.length++

    return this
  }
}
