// ===============================================================
// Write a function isSubsequence which takes in two strings and
// checks whether the characters in the first string form a
// subsequence of the characters in the second string. In other
// words, the function should check wheather the characters in
// the first string appear somewhere in the second string,
// without their order changing.
// ===============================================================

// Time Complexity: O(n)
// Space Complexity: O(1)

function isSubsequence(str, baseStr) {
  let strIndex = 0
  let baseIndex = 0
  const subString = []

  while (baseIndex < baseStr.length) {
    if (str[strIndex] === baseStr[baseIndex]) {
      subString.push(baseStr[baseIndex])
      strIndex++
    }

    if (subString.join('') === str) return true

    baseIndex++
  }

  return false
}

module.exports = isSubsequence
