function countDown(num) {
  // base case (exit condistion)
  if (num <= 0) {
    console.log('All done!')
    return
  }

  console.log(num)
  num--
  // has different input
  countDown(num)
}

console.log(countDown(5))
