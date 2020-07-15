const cache = []

function fib(num) {
  if (num <= 2) return 1

  if (!cache[num]) cache[num] = fib(num - 1) + fib(num - 2)

  return cache[num]
}

module.exports = fib
