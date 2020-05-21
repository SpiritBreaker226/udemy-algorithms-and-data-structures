// ===============================================================
// Write a function called insertionSort which accepts a
// number array and returns the sorted version of that array
// ===============================================================

// Time Complexity: O(n^2)

function insertionSort(numbers) {
  let newNumbers = [...numbers]

  for (let index = 1; index < newNumbers.length; index++) {
    let extractedValue = newNumbers.splice(index, 1)[0]
    let noAdded = true

    for (let innerIndex = index - 1; innerIndex >= 0; innerIndex--) {
      if (newNumbers[innerIndex] > extractedValue) {
        continue
      }

      noAdded = false
      newNumbers.splice(innerIndex + 1, 0, extractedValue)
      console.log('innerIndex', innerIndex)
      break
    }

    if (noAdded) {
      if (newNumbers[0] > extractedValue) {
        newNumbers.splice(0, 0, extractedValue)
      } else {
        newNumbers.splice(1, 0, extractedValue)
      }
    }
  }

  return newNumbers
}

module.exports = insertionSort
