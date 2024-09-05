/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
 * 首尾双指针
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 
 * dp表存储每个组合是否是回文串，
 * 当前组合是否是回文串取决于首尾字符是否相等，且去掉首尾字符后的子串是否是回文串
 */
var longestPalindrome = function(s) {
  const n = s.length;
  let res = '';
  const dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};
// @lc code=end

