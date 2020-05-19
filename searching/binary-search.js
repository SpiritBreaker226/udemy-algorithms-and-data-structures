// ===============================================================
// Write a function called binarySearch which accepts a sorted
// array and a value and returns the index at which the value
// exists. Otherwise, return -1.
// ===============================================================

// Time Complexity: O(log n)

function binarySearch(numbers, searchingForNum) {
  let low = 1
  let hight = numbers.length - 1
  let mid = Math.floor((low + hight) / 2)

  while (hight >= low) {
    if (numbers[mid] === searchingForNum) {
      return mid
    } else if (searchingForNum > numbers[mid]) {
      low = mid + 1
    } else {
      hight = mid - 1
    }

    mid = Math.floor((low + hight) / 2)
  }

  return -1
}

module.exports = binarySearch
