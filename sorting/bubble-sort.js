// ===============================================================
// Write a function called bubbleSort which accepts a
// number array and returns the sorted version of that array
// ===============================================================

// Time Complexity: O(n^2)

function bubbleSort(numbers) {
  let newNumbers = [...numbers]
  let noSwap

  // goes around each number controlling the passes for the bubble sort
  // To prevent not having to sort the largest numbers again since they
  //  are already in place and would not move again and wasting the time
  // of those.
  for (let index = newNumbers.length; index > 0; index--) {
    noSwap = true

    // goes around each of numbers in newNumbers
    // starting from thewhere the  previous index to make it
    // so that the loop does not need to go throw elemeents around sorted
    for (let innerIndex = 0; innerIndex < index - 1; innerIndex++) {
      // checking if innerIndex is bigger then the its next element
      // if so then swap the positions around
      if (newNumbers[innerIndex] > newNumbers[innerIndex + 1]) {
        swap(newNumbers, innerIndex, innerIndex + 1)

        noSwap = false
      }
    }

    // checks if there has been a swap if not then stop looping as bubble sot
    // is done
    if (noSwap) break
  }

  return newNumbers
}

const swap = (array, index1, index2) => {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

module.exports = bubbleSort
