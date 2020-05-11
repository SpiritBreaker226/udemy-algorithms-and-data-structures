// ===============================================================
// Given two strings, write a function to deermine if the second
// string is anagram of the first. An anagram is a word, phrase,
// or name formed by rearranging the letters of another, such as
// cinema, formed from iceman.
// ===============================================================

// Time Complexity: O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  str1.split('').forEach((char) => {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1
  })

  str2.split('').forEach((char) => {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1
  })

  for (const keyChar in frequencyCounter1) {
    if (frequencyCounter2[keyChar] !== frequencyCounter1[keyChar]) {
      return false
    }
  }

  return true
}

console.log('blank example', validAnagram('', '')) // ecpect: true
console.log('aaz example', validAnagram('aaz', 'zza')) // ecpect: false
console.log('anagram example', validAnagram('anagram', 'nagaram')) // ecpect: true
console.log('rat example', validAnagram('rat', 'car')) // ecpect: false
console.log('awesome example', validAnagram('awesome', 'awesom')) // ecpect: false
console.log('qwerty example', validAnagram('qwerty', 'qeywrt')) // ecpect: true
console.log(
  'texttwisttime example',
  validAnagram('texttwisttime', 'timetwisttext')
) // ecpect: true
