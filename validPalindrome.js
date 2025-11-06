/**
 * Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. 
It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }


    isPalindrome(s) {
        let newStr = '';
        for (let c of s) {
            if (this.isAlphaNum(c)) {
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }

}