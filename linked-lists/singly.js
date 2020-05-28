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
