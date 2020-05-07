function sum(array) {
  let total = 0

  // For Space Complexity the Big O is O(1) since there is
  // only two places where memory is being alloweded and is
  // not in a loop so no n
  for (let index = 0; index < array.length; index++) {
    total = array[index]
  }

  return total
}

console.log(sum([10, 100, 1000, 1000000]))
