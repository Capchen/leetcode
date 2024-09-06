/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * days = [1,4,6,7,8,20], costs = [2,7,15]
 * 1，7，30
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const n = days.length;
    const dp = new Array(days[n-1] + 1).fill(0);
    for (let i = 1; i < dp.length; i++) {
        const isTravl = days.includes(i);
        if (isTravl) {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(0,i - 7)] + costs[1],
                dp[Math.max(0,i - 30)] + costs[2]
            );
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[dp.length - 1];
};
// @lc code=end

mincostTickets([1,4,6,7,8,20], [2,7,15])