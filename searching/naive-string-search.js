// ===============================================================
// Write a function called naiveStringSearch which accepts a
// string and a substring and returns the number of times the
// substring is in the string. Otherwise, return 0.
// ===============================================================

// Time Complexity: O(ln^2)

function naiveStringSearch(string, substr) {
  let count = 0
  const substrings = substr.split('')
  const characters = string.split('')

  // goes around each char in the string
  for (let index = 0; index < characters.length; index++) {
    // goes around each character in the substring to check if the chacracter
    // is part of the substring if so then add
    for (let innerIndex = 0; innerIndex < substrings.length; innerIndex++) {
      const futureIndex = index + innerIndex // holds the index to check the other cahcaters in string

      // checks if the characters in string are all in the substring by adding
      // to the index using innerIndex since innerIndex always goes up by one
      // and starts from zero
      if (characters[futureIndex] !== substrings[innerIndex]) {
        index = futureIndex
        break
      }

      // checks if this is the last chacarter if so then add to the counter
      // and update index to index + innerIndex + 1 so that it can jump to the next
      //  unknown chactert
      if (innerIndex === substrings.length - 1) {
        index = futureIndex

        count++
      }
    }
  }

  return count
}

module.exports = naiveStringSearch
