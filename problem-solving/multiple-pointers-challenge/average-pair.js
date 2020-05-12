// ===============================================================
// Write a function called averagePair. Given a sorted array of
// integers and a target average, determine if there is a pair of
// values in the array where the average of the pair equals the
// target average. Theere may be more than one pair that matches
// the average target.
// ===============================================================

// Time Complexity: O(n)
// Space Complexity: O(1)

function averagePair(arr, num) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === num) {
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
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;

  while(start < end){
    let avg = (arr[start]+arr[end]) / 2

    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }

  return false;
}
*/

module.exports = averagePair
