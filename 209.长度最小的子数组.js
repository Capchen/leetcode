/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = nums.length + 1;
    for (let i = 0; i < nums.length; i++) {
        let j = i
        let sum = 0;
        if (nums[j] >= target) {
            return 1;
        }
        while (sum < target && j < nums.length) {
            sum += nums[j];

            j++;
        }
        if (sum < target) {
            break;
        } else {
            console.log(j, i)
            min = Math.min(min, j - i);
        }
        
    }
    return min === nums.length + 1 ? 0 : min;
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))

// @lc code=end

