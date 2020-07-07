class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    const weiredPrime = 31

    for (let index = 0; index < Math.min(key.length, 100); index++) {
      const char = key[index]
      const value = char.charCodeAt(0) - 96

      total = (total * weiredPrime + value) % this.keyMap.length
    }

    return total
  }
}

module.exports = HashTable
