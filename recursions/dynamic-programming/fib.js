// Memoization

// const cache = []

// function fib(num) {
//   if (num <= 2) return 1

//   if (!cache[num]) cache[num] = fib(num - 1) + fib(num - 2)

//   return cache[num]
// }

// Tabulation

function fib(num) {
  if (num <= 2) return 1

  const fibNumbers = [0, 1, 1]

  for (let index = 3; index <= num; index++) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2]
  }

  return fibNumbers[num]
}

module.exports = fib
