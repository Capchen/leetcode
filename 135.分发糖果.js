/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 * [1,0,2]
 */
var candy = function(ratings) {
    const dp = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            dp[i] = dp[i - 1] + 1
        } else if (ratings[i] < ratings[i - 1] && dp[i] >= dp[i - 1]) {
            dp[i-1] = dp[i] + 1
            let j = i - 1
            while (j > 0 && dp[j] === dp[j-1] && ratings[j-1] > ratings[j]) {
                dp[j-1] = dp[j] + 1
                j--
            }
        }
    }
    console.log(dp)
    const res = dp.reduce((a, b) => a + b, 0)
    console.log(res)
    return res
};
candy([3,2,1,1,4,3,3])
[2,2,1,1,2,1,1]
// @lc code=end

