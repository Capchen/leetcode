/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 * 先排序，然后从后往前遍历
 * 确保文章个数大于等于h，且引用数大于等于h
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let h = 0;
    for (let i = citations.length - 1; i >= 0; i--) {
        if (citations[i] >= h + 1) {
            h++;
        } else {
            break;
        }
    }
    return h;
};
// @lc code=end