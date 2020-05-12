// ===============================================================
// Write a function called sameFrequency. Given two positive
// integers, find out if the two numbers have the same frequency
// of digits.
// ===============================================================

// Time Complexity: O(n)

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()
  const lookUp = {}

  for (let index = 0; index < strNum1.length; index++) {
    let number = strNum1[index]

    lookUp[number] ? (lookUp[number] += 1) : (lookUp[number] = 1)
  }

  for (let index = 0; index < strNum2.length; index++) {
    let number = strNum2[index]

    if (!lookUp[number]) {
      return false
    } else {
      lookUp[number] -= 1
    }
  }

  return true
}

/*
// Instructor solution to compare
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  let countNum1 = {}
  let countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false
  }

  return true
}
*/

module.exports = sameFrequency
