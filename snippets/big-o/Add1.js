function addUpTo(n) {
  let total = 0

  for (let index = 1; index <= n; index++) {
    total += index
  }

  return total
}

console.log(addUpTo(10))
console.log(addUpTo(100))
console.log(addUpTo(1000))
console.log(addUpTo(1000000))
