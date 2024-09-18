/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let dp = new Array(prices.length)
    dp[0] = 0
    for (let i = 1; i < prices.length; i++) {
        let value = prices[i] - minPrice
        if (dp[i-1] + value > dp[i-1]) {
            minPrice = prices[i]
            dp[i] = dp[i-1] + value
        } else {
            dp[i] = dp[i-1]
            minPrice = Math.min(minPrice, prices[i])
        }
    }
    console.log(dp)
    return dp[prices.length - 1]
};
maxProfit([1,2,3,4,5]);
// @lc code=end

