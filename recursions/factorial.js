function factorialNonRecusion(num) {
  let total = 1

  for (let index = num; index > 1; index--) {
    total *= index
  }

  return total
}

function factorialRecusion(num) {
  if (num === 1) return 1

  return num * factorialRecusion(num - 1)
}

let t1 = performance.now()

console.log(factorialNonRecusion(4))

let t2 = performance.now()

console.log(`Non-Recusion Performance: ${(t2 - t1) / 1000} seconds.`)

t1 = performance.now()

console.log(factorialRecusion(4))

t2 = performance.now()

console.log(`Recusion Performance: ${(t2 - t1) / 1000} seconds.`)
