/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**  [10,9,2,5,3,7,101,18]
 *   [1, 1,1,2,2,3,4,  4]
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
};
// @lc code=end

