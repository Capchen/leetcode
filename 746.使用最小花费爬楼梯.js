/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * [10, 15, 20]
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length + 1; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
  }
  return dp[cost.length];
};
// @lc code=end

