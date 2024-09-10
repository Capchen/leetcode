/*
 * @lc app=leetcode.cn id=2140 lang=javascript
 *
 * [2140] 解决智力问题
 */

// @lc code=start
/**
 * @param {number[][]} questions
 * @return {number}
 * 关键： 倒序dp来满足无后效性
 */
var mostPoints = function(questions) {
    let len = questions.length;
    let dp = new Array(questions.length).fill(0);
    dp[len - 1] = questions[len - 1][0];
    for (let i = len - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + questions[i][1] + 1] || 0))
    }
    return dp[0]
};
