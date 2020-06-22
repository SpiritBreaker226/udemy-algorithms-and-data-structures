// ===============================================================
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence. Recall
// that the Fibonacci sequence is the sequence of whole numbers
// 1,1,2,3,5,8, ... which starts with 1 and 1, and where every
// number thereafter is equal to the sum of the previous two
// numbers.
// ===============================================================

const cache = {}

function fib(num) {
  if (num < 2) return num

  if (cache[num]) return cache[num]

  cache[num] = fib(num - 1) + fib(num - 2)

  return cache[num]
}

// Another Way to do fibonacci by updating a two element array with the next
// Fibonacci numbers thus reducing the space complexity O(1) since the array is
// change in place and there is no wate of mememory to fine the number of
// Fibonacci sequrence Also no this is zero base while othe current version is
// one base

// Refer: AlgoExpert - https://www.algoexpert.io/questions/Nth%20Fibonacci
// subscription is required

// function fib(num) {
//   const lastTwo = [0, 1]
//   let counter = 3

//   while (counter <= num) {
//     let nextFib = lastTwo[0] + lastTwo[1]

//     lastTwo[0] = lastTwo[1]
//     lastTwo[1] = nextFib

//     counter++
//   }

//   return (num > 1) ? lastTwo[1] : lastTwo[0]
// }

module.exports = fib
