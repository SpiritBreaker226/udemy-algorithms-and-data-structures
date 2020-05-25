// ===============================================================
// Write a function called quickSort which accepts a
// number array and returns the sorted version of that array

// Write a function called pivotHelper which which index to swap
// the pivot to
// ===============================================================

const swap = require('./swap')

// Time Complexity: O(n^2)

function quickSort(numbers) {
  if (numbers.length < 2) return numbers

  const pivotIndex = pivotHelper(numbers)
  const leftSideArray = quickSort(numbers.slice(0, pivotIndex))
  const rightSideArray = quickSort(numbers.slice(pivotIndex + 1))

  return [...leftSideArray, numbers[pivotIndex], ...rightSideArray]
}

// Time Complexity: O(n)

function pivotHelper(numbers, startIndex = 0, endIndex = numbers.length - 1) {
  let swapIndex = startIndex
  const pivot = numbers[startIndex]

  for (let index = startIndex + 1; index <= endIndex; index++) {
    if (pivot > numbers[index]) {
      swapIndex++
      swap(numbers, index, swapIndex)
    }
  }

  swap(numbers, startIndex, swapIndex)

  return swapIndex
}

module.exports = {
  quickSort,
  pivotHelper,
}
