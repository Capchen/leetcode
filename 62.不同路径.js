/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                dp[0][j] = 1
            }
            if(j === 0) {

                dp[i][0] = 1
            }
            if (i > 0 && j > 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1]
};
console.log(uniquePaths(3,7))
// @lc code=end
[0, 1, 2, 3, 4, 5, 6]
[1, 2, 4, 7, 11, 16, 22]
[2, 4, 8, 15, 26, 42, 64]
