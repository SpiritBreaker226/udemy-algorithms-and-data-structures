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

module.exports = sameFrequency
