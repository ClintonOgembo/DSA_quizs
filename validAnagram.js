/**
 * Given two strings s and t, 
 * return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string,
 but the order of the characters can be different.
 */
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s.split(',').sort((a, b) => a - b);
        t.split(',').sort((a, b) => a - b);
    }
}