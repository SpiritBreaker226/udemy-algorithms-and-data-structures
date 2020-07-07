class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  get(key) {
    const index = this._hash(key)

    if (this.keyMap[index]) {
      for (
        let hashIndex = 0;
        hashIndex < this.keyMap[index].length;
        hashIndex++
      ) {
        const keyPair = this.keyMap[index][hashIndex]

        if (keyPair[0] === key) return keyPair[1]
      }
    }

    return undefined
  }

  keys() {
    const keyMap = []
    const keys = []

    for (let index = 0; index < this.keyMap.length; index++) {
      if (this.keyMap[index]) {
        keyMap.push(...this.keyMap[index])
      }
    }

    keyMap.forEach((keyPair) => keys.push(keyPair[0]))

    return keys
  }

  set(key, value) {
    const index = this._hash(key)

    if (!this.keyMap[index]) this.keyMap[index] = []

    this.keyMap[index].push([key, value])
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
