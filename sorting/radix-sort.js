// ===============================================================
// Write a function called radixSort which accepts a
// number array and returns the sorted version of that array

// Write a function called getDigit which returns the digit in num
// at the given place value

// Write a funciton called digitCount which returns the number of
// digits in num

// Write a funciton called mostDigits to be given an array of
// numbers, returns the number of digits in the largest numbers in
// the list.
// ===============================================================

// Time Complexity: O(nk)

function radixSort(numbers) {
  const numberWithMostDigits = mostDigits(numbers)

  for (let digitIndex = 0; digitIndex < numberWithMostDigits; digitIndex++) {
    let buckets = Array.from({ length: 10 }, () => [])

    for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
      const digit = getDigit(numbers[numberIndex], digitIndex)

      buckets[digit].push(numbers[numberIndex])
    }

    numbers = buckets.flat()
  }

  return numbers
}

/**
 * Foumla works like this:
 *   Math.pow(10, place) is 10^place
 *     as the digits going from right to left
 *     are 1, 10, 100, 1000, this gets the location
 *   divided by absout numbers
 *    which makes sure that number is a positive number
 *   then floors to the nears whole number
 *   division remainder to 10
 *
 * for example:
 *    7323/100 = 73.23
 *    get floor to 73
 *     73 % 10 = 7
 *
 */

// Time Complexity: O(1)

function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10
}

// Time Complexity: O(1)

function digitCount(number) {
  return number.toString().split('').length
}

// Time Complexity: O(n)

function mostDigits(numbers) {
  let numberWithMostDigits = 0

  numbers.forEach((number) => {
    numberWithMostDigits = Math.max(numberWithMostDigits, digitCount(number))
  })

  return numberWithMostDigits
}

module.exports = {
  radixSort,
  digitCount,
  getDigit,
  mostDigits,
}
