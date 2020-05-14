function sumRange(num) {
  // base case (exit condistion)
  if (num === 1) return 1

  // has different input
  return num + sumRange(num - 1)
}

/*

  How Does sumRage works

  Call Stack

  sumRange(3)
  -> sumRange(2)
  ->-> sumRange(1)

  ->-> sumRange(1) returns 1
  -> sumRange(2) returns 3 (num: 2 + sumRange(1) returns 1)
  sumRange(3) returns 6 (num: 3 + sumRange(2) returns 3)

  sum is 6

*/

console.log(sumRange(3))
