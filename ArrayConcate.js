/*
You are given an integer array nums of length n. 
Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/

/** 
 * My Solution
 * TIME COMPLEXITY O(n)
 * SPACE COMPLEXITY O(n)
 faster but less flexible 
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [...nums, ...nums];
        return ans;
    }
}

const solu = new Solution();
console.log(solu.getConcatenation([1, 4, 1, 2]));

/** 
 * Solution Given in neetcode
 * TIME COMPLEXITY O(n)
 * SPACE COMPLEXITY O(n)
 * Has more Control but slightly slowly
 */
class Concat {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];

        for (let i = 0; i < 2; i++) {
            for (let n of nums) {
                ans.push(n);
            }
        }
        return ans;
    }
}

const solution = new Concat;
console.log(solution.getConcatenation([1, 4, 1, 2]));