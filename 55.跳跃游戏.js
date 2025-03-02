/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 贪心，这里用循环遍历数组，更新最远距离
 * 不能陷入不成功就减1的误区
 */
var canJump = function(nums) {
  const n = nums.length;
  let rightmost = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) {
          return true;
      }
    }
  }
  return false;
};
// @lc code=end

