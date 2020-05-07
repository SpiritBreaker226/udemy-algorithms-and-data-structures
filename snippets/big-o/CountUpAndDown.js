function countUpAndDown(n) {
  console.log('Going up!')

  // The Big O For this function is O(n) since the operations is bound by n
  for (let indexUp = 1; indexUp <= n; indexUp++) {
    console.log(indexUp)
  }

  console.log('At the top!\nGoing Down...')

  // The Big O For this function is O(n) since the operations is bound by n
  for (let indexDown = n - 1; indexDown >= 0; indexDown--) {
    console.log(indexDown)
  }
  console.log('Back down. Bye!')
}

countUpAndDown(10)
