/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 思路：动态规划,无后效性
 * 当前的楼梯数等于前一级楼梯数加上前两级楼梯数
 */
var climbStairs = function(n) {
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i < n+1;i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
// @lc code=end

