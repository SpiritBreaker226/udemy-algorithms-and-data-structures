function double(array) {
  let newArr = []

  // For Space Complexity the Big O is O(n) since there is
  // newArr is adding n elments in memoary so the amount of memoary
  // can run out at Infintiy
  for (let index = 0; index < array.length; index++) {
    newArr.push(2 * array[index])
  }

  return newArr
}

console.log(double([10, 100, 1000, 1000000]))
