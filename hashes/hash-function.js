function hash(key, arrayLength) {
  let total = 0

  for (const char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLength
  }

  return total
}
