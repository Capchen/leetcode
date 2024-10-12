/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 * matrix = [
 * ["1","0","1","0","0"],
 * ["1","0","1","1","1"],
 * ["1","1","1","1","1"],
 * ["1","0","1","1","1"]
 * ]
 * 
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    if (m === 0) return 0;
    const n = matrix[0].length;
    if (n === 0) return 0;
    let max = 0;
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    // dp[m][n] 表示以 matrix[m][n] 为右下角的最大正方形的边长
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 边界条件
            if (i === 0 || j === 0) {
                dp[i][j] = matrix[i][j] === '1' ? 1 : 0;
            } else if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            max = Math.max(max, dp[i][j]);
        }
    }
    return max * max;
};
// @lc code=end

