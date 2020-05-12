const validAnagram = require('../../problem-solving/frequency-counter-challenge/anagrams')
const sameFrequency = require('../../problem-solving/frequency-counter-challenge/same-frequency')

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

  describe('for challenge same frequency', () => {
    it('should be false for the same frequency for small numbers', () => {
      expect(sameFrequency(182, 281)).toBeTruthy()
    })

    it('should be false for not the same frequency', () => {
      expect(sameFrequency(34, 14)).toBeFalsy()
    })

    it('should be false for the same frequency for large numbers', () => {
      expect(sameFrequency(3589578, 5879385)).toBeTruthy()
    })
  })
})
