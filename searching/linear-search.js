// ===============================================================
// Write a function called linearSearch which accepts an array and
// a value, and returns the index at which the value exists. If
// the value does not exist in the array, return -1. Don't use
// indexOf to implement this function!
// ===============================================================

// Time Complexity: O(n)

function linearSearch(numbers, searchingForNum) {
  let indexOf = -1

  // goes around each item in the array
  numbers.forEach((number, index) => {
    // checks if the current element in the array is the same as the argumrnt str
    if (number === searchingForNum) {
      // if so then asign return the index
      indexOf = index
      return indexOf
    }
  })

  // return -1 if not found
  return indexOf
}

module.exports = linearSearch
