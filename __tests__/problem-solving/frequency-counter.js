const validAnagram = require('../../problem-solving/frequency-counter-challenge/anagrams')

describe('frequency counter', () => {
  describe('for challenge anagrams', () => {
    it('should be true for blank example', () => {
      expect(validAnagram('', '')).toBeTruthy()
    })

    it('should be false for aaz example', () => {
      expect(validAnagram('aaz', 'zza')).toBeFalsy()
    })

    it('should be true for anagram example', () => {
      expect(validAnagram('anagram', 'nagaram')).toBeTruthy()
    })

    it('should be false for rat example', () => {
      expect(validAnagram('rat', 'car')).toBeFalsy()
    })

    it('should be false for awesome example', () => {
      expect(validAnagram('awesome', 'awesom')).toBeFalsy()
    })

    it('should be true for qwerty example', () => {
      expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy()
    })

    it('should be true for texttwisttime example', () => {
      expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy()
    })
  })
})
