class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value, node = this.root) {
    if (!this.root) {
      this.root = new Node(value)

      return this
    }

    if (value === node.value) {
      return undefined
    } else if (value < node.value) {
      if (node.left) return this.insert(value, node.left)

      node.left = new Node(value)
    } else {
      if (node.right) return this.insert(value, node.right)

      node.right = new Node(value)
    }

    return this
  }
}

module.exports = BinarySearchTree
