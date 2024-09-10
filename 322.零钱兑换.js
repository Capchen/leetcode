/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * coins = [1, 2, 5], amount = 11
 * dp[11] = Math.min(dp[11], dp[11 - 1] + 1)
 * dp[11] = Math.min(dp[11], dp[11 - 2] + 1)
 * dp[11] = Math.min(dp[11], dp[11 - 5] + 1)
 */
var coinChange = function(coins, amount) {
    const n = coins.length
    // dp[i] 表示凑成金额 i 需要的最少硬币数量
    const dp = Array.from({ length: amt + 1 }, () => Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let a = 1; a <= amount; a++) {
            if (conis[i] > a) {
                dp[a] = dp[a]
            } else {
                dp[a] = Math.min(dp[a], dp[a - coins[i-1]] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

