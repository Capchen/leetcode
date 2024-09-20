/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * [1,2,3,4]
 * [1,1,2,6]
 * [24,12,4,1]
 * 
 * [24,12,8,6]
 */
var productExceptSelf = function(nums) {
    let len = nums.length
    let left = [1]
    let right = [1]
    let res = []
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i-1]
        right[i] = right[i - 1] * nums[len - i]
    }
    right.reverse()
    for (let i = 0; i < len; i++) {
        res[i] = left[i] * right[i]
    }
    console.log(res)
    return res
};
productExceptSelf([1,2,3,4])
// @lc code=end

