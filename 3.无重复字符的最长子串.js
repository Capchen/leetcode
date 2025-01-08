/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口
  let left = 0, right = 0;
  let res = 0;
  const map = new Map();
  while (right < s.length) {
    const c = s[right];
    right++;
    map.set(c, (map.get(c) || 0) + 1);
    while (map.get(c) > 1) {
      const d = s[left];
      left++;
      map.set(d, map.get(d) - 1);
    }
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end