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
        if (s.length !== t.length) return false;

        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');

        if (sortedS !== sortedT) return false;
        return true;
    }
}

const solu = new Solution();
console.log(solu.isAnagram("racecar", "carrace"));
console.log(solu.isAnagram("car", "rat"));