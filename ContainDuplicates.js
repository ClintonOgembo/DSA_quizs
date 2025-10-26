/*Given an integer array nums, return true if any value appears more than once in the array,
 otherwise return false.
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

/*Time Complexity
The loop runs once through nums → O(n)

Space Complexity
In the worst case (no duplicates), all n elements are stored in the Set => Space Complexity: O(n)
*/