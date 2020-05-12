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

/*
// Instructor solution to compare

// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
*/

module.exports = isSubsequence
