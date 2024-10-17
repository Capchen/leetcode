/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 思路：动态规划，无后效性
 * 和爬楼梯一样 f(n) = f(n-1) + f(n-2)
 */
var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
// @lc code=end

