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

  get(index) {
    if (index < 0) return null

    let currentNode = this.head

    for (let counter = 0; counter < this.length; counter++) {
      if (index === counter) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false

    if (index === 0) {
      this.unshift(value)

      return true
    }

    if (index === this.length) {
      this.push(value)

      return true
    }

    const newNode = new Node(value)
    const prevNode = this.get(index - 1)

    newNode.next = prevNode.next
    prevNode.next = newNode

    this.length++

    return true
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

  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift(value)
    if (index === this.length - 1) return this.pop(value)

    const prevNode = this.get(index - 1)
    const removeNode = prevNode.next

    prevNode.next = removeNode.next

    this.length--

    return removeNode
  }

  set(index, value) {
    const node = this.get(index)

    if (node) {
      node.value = value

      return true
    }

    return false
  }

  shift() {
    if (this.length === 0) return undefined

    this.length--

    const currentHead = this.head

    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }

    return currentHead
  }

  unshift(value) {
    const node = new Node(value)

    if (this.length === 0) {
      this.tail = node
    } else {
      node.next = this.head
    }

    this.head = node
    this.length++

    return this.list
  }
}
