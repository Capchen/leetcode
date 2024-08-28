/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    const dp = [nums[0], Math.max(nums[0], nums[1])]
    // dp[n] = Math.max(dp[n-2]+nums[n], dp[n-1])
    // dp[2] = Math.max(dp[0]+nums[2],dp[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
    }
    return dp[dp.length -1]
};
// @lc code=end
