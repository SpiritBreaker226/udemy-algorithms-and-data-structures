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

  get(index) {
    if (index < 0 || index >= this.length) return null

    let node = this.head
    const middleIndex = Math.floor(this.length / 2)

    if (index < middleIndex) {
      for (let listIndex = 0; listIndex !== index; listIndex++) {
        node = node.next
      }
    } else {
      node = this.tail

      for (let listIndex = this.length - 1; listIndex !== index; listIndex--) {
        node = node.prev
      }
    }

    return node
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
    const beforeNode = this.get(index - 1)
    const afterNode = beforeNode.next

    if (afterNode) afterNode.prev = newNode

    newNode.next = afterNode
    beforeNode.next = newNode
    newNode.prev = beforeNode

    this.length++

    return true
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

    const currentHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head.next.prev = null
      this.head = this.head.next

      currentHead.next = null
    }

    this.length--

    return currentHead
  }

  unshift(value) {
    const node = new Node(value)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.length++

    return this
  }
}
