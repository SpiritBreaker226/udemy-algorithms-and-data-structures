// ===============================================================
// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this
// using the frequency counter pattern OR the multiple pointers
// pattern.
// ===============================================================

// Time Complexity: O(n)

function areThereDuplicates(...args) {
  let left = 0
  let right = args.length - 1

  while (left < right) {
    const isDuplicated = args[left] === args[right]

    if (isDuplicated) {
      return true
    } else if (left + 1 === right) {
      right--
      left = 0
    } else {
      left++
    }
  }

  return false
}

module.exports = areThereDuplicates
