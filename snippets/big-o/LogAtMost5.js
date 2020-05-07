function logAtLeast5(n) {
  // The Big O is O(1) since n does not contorl when the loop stops so the
  // number of operations is constent since n is not in the loop itself
  for (let index = 1; index <= Math.min(5, n); index++) {
    console.log(index)
  }
}

logAtLeast5(3)
logAtLeast5(7)
