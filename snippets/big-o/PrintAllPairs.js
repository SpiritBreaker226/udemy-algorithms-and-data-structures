function printAllPairs(n) {
  // The Big O For this function is O(n^2) since the operations is bound by n twice
  for (let index = 1; index <= n; index++) {
    for (let innerIndex = 1; innerIndex <= n; innerIndex++) {
      console.log(index, innerIndex)
    }
  }
}

printAllPairs(100)
