/*Given an integer array nums, return true if any value appears more than once in the array,
 otherwise return false.
 */

/** My Solution
 * Time Complexity
The loop runs once through nums → O(n)
 * Space Complexity
In the worst case (no duplicates), all n elements are stored in the Set => Space Complexity: O(n)
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newSet = new Set();
        for (let i of nums) {
            if (newSet.has(i)) {
                return true;
            }
            newSet.add(i);
        }
        return false;
    }

}

const solu = new Solution();
console.log(solu.hasDuplicate([1, 2, 3, 4, 4]));
console.log(solu.hasDuplicate([1, 2, 3, 4, 5]));



/** Second Solution in neetcode
 * SPACE COMPLEXITY O(1) or O(log n)
 * TIME COMPLEXITY O(n)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);  // Sort the array
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {       // Compare each element to the previous one
                return true;
            }
        }
        return false;
    }
}

