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

  find(value, node = this.root) {
    if (!node) return undefined
    if (value === node.value) return node

    return value < node.value
      ? this.find(value, node.left)
      : this.find(value, node.right)
  }

  // Instructor solution to compare
  // find(value) {
  //   let current = this.root

  //   while (current) {
  //     if (value === current.value) return current

  //     current = value < current.value ? current.left : current.right
  //   }

  //   return undefined
  // }

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

  // Instructor solution to compare
  // insert(value) {
  //   const newNode = new Node(value)

  //   if (!this.root) {
  //     this.root = newNode

  //     return this
  //   }

  //   let current = this.root

  //   while (true) {
  //     if (value === current.value) {
  //       return undefined
  //     } else if (value < current.value) {
  //       if (!current.left) {
  //         current.left = new Node(value)
  //         return this
  //       }

  //       current = current.left
  //     } else {
  //       if (!current.right) {
  //         current.right = new Node(value)
  //         return this
  //       }

  //       current = current.right
  //     }
  //   }
  // }
}

module.exports = BinarySearchTree
