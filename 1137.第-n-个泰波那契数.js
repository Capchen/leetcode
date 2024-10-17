/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 思路：动态规划，无后效性
 * Tn+3 = Tn + Tn+1 + Tn+2
 * T0 = 0, T1 = 1, T2 = 1,
 */
var tribonacci = function(n) {
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    return dp[n]
};
// @lc code=end

