// ===============================================================
// Write a function called binarySearch which accepts a sorted
// array and a value and returns the index at which the value
// exists. Otherwise, return -1.
// ===============================================================

// Time Complexity: O(log n)

function binarySearch(numbers, searchingForNum) {
  let low = 1
  let high = numbers.length - 1
  let mid = Math.floor((low + high) / 2)

  while (high >= low) {
    if (numbers[mid] === searchingForNum) {
      return mid
    } else if (searchingForNum > numbers[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }

    mid = Math.floor((low + high) / 2)
  }

  return -1
}

module.exports = binarySearch
