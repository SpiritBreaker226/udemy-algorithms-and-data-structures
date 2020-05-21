// ===============================================================
// Write a function called selectionSort which accepts a
// number array and returns the sorted version of that array
// ===============================================================

// Time Complexity: O(n^2)

const swap = require('./swap')

function selectionSort(numbers) {
  let newNumbers = [...numbers]

  // goes around newNumbers loop throw each index ans swap with the
  // minimum value that has not been swap
  for (let index = 0; index < newNumbers.length; index++) {
    let minimum = index

    // goes around newNumbers for each element checking which one is the mimmun
    //  then getting the index for the minium value
    for (
      let innerIndex = index + 1;
      innerIndex < newNumbers.length;
      innerIndex++
    ) {
      if (newNumbers[innerIndex] < newNumbers[minimum]) {
        minimum = innerIndex
      }
    }

    // checks if the minimum and index are the same
    // if not then swap to save processing power
    if (minimum !== index) {
      // swaps the minimum value with the current index
      swap(newNumbers, minimum, index)
    }
  }

  return newNumbers
}

module.exports = selectionSort
