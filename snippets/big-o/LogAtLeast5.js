function logAtLeast5(n) {
  // The Big O is O(n) since n controls when the loop is going to stop
  for (let index = 0; index <= Math.max(5, n); index++) {
    console.log(index)
  }
}

logAtLeast5(3)
logAtLeast5(7)
