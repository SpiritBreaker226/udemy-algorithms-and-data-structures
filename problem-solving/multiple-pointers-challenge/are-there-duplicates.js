// ===============================================================
// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this
// using the frequency counter pattern OR the multiple pointers
// pattern.
// ===============================================================

// Time Complexity: O(n)

function areThereDuplicates(...args) {
  let left = 0
  let right = args.length - 1

  while (left < right) {
    const isDuplicated = args[left] === args[right]

    if (isDuplicated) {
      return true
    } else if (left + 1 === right) {
      right--
      left = 0
    } else {
      left++
    }
  }

  return false
}

/*
// Instructor solution to compare

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates(...args) {
  let collection = {}

  for (let val in args) {
    collection[args[val]] = (collection[args[val]] || 0) + 1
  }

  for(let key in collection){
    if(collection[key] > 1) return true
  }

  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);

  let start = 0;
  let next = 1;

  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }

    start++
    next++
  }

  return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length
}
*/

module.exports = areThereDuplicates
