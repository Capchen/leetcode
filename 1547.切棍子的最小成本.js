/*
 * @lc app=leetcode.cn id=1547 lang=javascript
 *
 * [1547] 切棍子的最小成本
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 * 。。。。。
 * n = 7, cuts = [1,3,4,5]
 */
var minCost = function(n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a, b) => a - b);
    const m = cuts.length;
    const f = Array.from({ length: m }, () => Array(m).fill(0));

    for (let i = m - 3; i >= 0; i--) {
        for (let j = i + 2; j < m; j++) {
            let minCost = Infinity;
            for (let k = i + 1; k < j; k++) {
                minCost = Math.min(minCost, f[i][k] + f[k][j]);
            }
            f[i][j] = minCost + (cuts[j] - cuts[i]);
        }
    }

    return f[0][m - 1];
};


