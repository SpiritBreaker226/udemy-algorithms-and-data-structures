// ===============================================================
// Write a function called mergeSort which accepts a
// number array and returns the sorted version of that array

// Write a function called merge which accepts a
// two number arrays and returns comine merge array
// ===============================================================

// Time Complexity: O(n log n)

// function mergeSort(aNumbers, bNumbers = []) {
//   if (aNumbers.length <= 1 && bNumbers.length <= 1) {
//     return merge(aNumbers, bNumbers)
//   }

//   const aMid = Math.floor(aNumbers.length / 2)
//   const aFirstHalf = aNumbers.slice(0, aMid)
//   const aSecondHalf = aNumbers.slice(aMid)
//   const aMergeSorted = mergeSort(aFirstHalf, aSecondHalf)

//   const bMid = Math.floor(bNumbers.length / 2)
//   const bFirstHalf = bNumbers.slice(0, bMid)
//   const bSecondHalf = bNumbers.slice(bMid)
//   const bMergeSorted = mergeSort(bFirstHalf, bSecondHalf)

//   return merge(aMergeSorted, bMergeSorted)
// }

// Instructor solution to compare
function mergeSort(numbers) {
  if (numbers.length <= 1) return numbers

  const mid = Math.floor(numbers.length / 2)
  const firstHalf = mergeSort(numbers.slice(0, mid))
  const secondHalf = mergeSort(numbers.slice(mid))

  return merge(firstHalf, secondHalf)
}

// Time Complexity: O(n + m)

function merge(aNumbers, bNumbers) {
  const results = []
  let aNumberIndex = 0
  let bNumberIndex = 0

  // goes around each of the arrays
  while (aNumberIndex < aNumbers.length && bNumberIndex < bNumbers.length) {
    if (aNumbers[aNumberIndex] < bNumbers[bNumberIndex]) {
      // check if the if the value in aNumber is lesser then the value in bNumbers
      // if so then add then add aNumber value to result
      results.push(aNumbers[aNumberIndex])
      aNumberIndex++
      // if it aNumber is greater then the value in bNumbers
    } else {
      // thhen add bNumbers to the results
      results.push(bNumbers[bNumberIndex])
      bNumberIndex++
    }
  }

  while (aNumberIndex < aNumbers.length) {
    results.push(aNumbers[aNumberIndex])

    aNumberIndex++
  }

  while (bNumberIndex < bNumbers.length) {
    results.push(bNumbers[bNumberIndex])

    bNumberIndex++
  }

  return results
}

module.exports = {
  mergeSort,
  merge,
}
