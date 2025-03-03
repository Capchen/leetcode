/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 先按照每个start进行排序
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let tempDiff = [];
    for (let i = 0; i < intervals.length; i++) {
      const current = intervals[i];
      if (tempDiff.length === 0) {
        tempDiff = current;
        continue;
      }
      if (current[0] <= tempDiff[1]) {
        tempDiff = [tempDiff[0], Math.max(tempDiff[1], current[1])];
      } else if (current[0] > tempDiff[1]) {
        res.push(tempDiff);
        tempDiff = current;
      }
    }
    return res;
};
// @lc code=end

