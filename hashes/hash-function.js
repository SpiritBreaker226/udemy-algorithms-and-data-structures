function hash(key, arrayLength) {
  let total = 0
  const weiredPrime = 31

  for (let index = 0; index < Math.min(key.length, 100); index++) {
    const char = key[index]
    const value = char.charCodeAt(0) - 96

    total = (total * weiredPrime + value) % arrayLength
  }

  return total
}
