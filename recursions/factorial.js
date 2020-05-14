function factorialNonRecusion(num) {
  let total = 1

  for (let index = num; index > 1; index--) {
    total *= index
  }

  return total
}

console.log(factorialNonRecusion(4))
