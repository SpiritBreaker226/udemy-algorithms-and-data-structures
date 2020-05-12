// ===============================================================
// Implement a function called countUniqueValues, which accepts a
// sorted array, and counts the unique values in the array. There
// can be negative numbers in the array, but it will always be
// sorted.
// ===============================================================

// Time Complexity: O(n)
// Space Complexity: O(1)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let uniqueIndex = 0
  const unqiueNumbers = []

  for (let index = 1; index < arr.length; index++) {
    if (arr[uniqueIndex] !== arr[index]) {
      unqiueNumbers.push(arr[uniqueIndex])
      uniqueIndex = index
    }
  }

  return unqiueNumbers.length + 1
}

console.log('return 2 expect', countUniqueValues([1, 1, 1, 1, 1, 1, 2]))
console.log(
  'return 7 expect',
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
)
console.log('return 0 expect', countUniqueValues([]))
console.log('return 4 expect', countUniqueValues([-2, -1, -1, 0, 1]))

/*
// Instructor solution to compare
function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let index = 0

  for (let indexArr = 1; indexArr < arr.length; indexArr++) {
    if (arr[index] !== arr[indexArr]) {
      index++
      arr[index] = arr[indexArr]
    }
  }

  return index + 1
}
*/
