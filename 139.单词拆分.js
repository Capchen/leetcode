/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const len = s.length;
  const dp = new Array(len).fill(false);
  dp[0] = wordDict.includes(s[0]);
  for (let i = 1; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      const val = s.slice(j, i + 1);
      const result = wordDict.includes(val);
      if ( result && j > 0) {
        dp[i] = dp[j-1]
      }
      if (result && j === 0) {
        dp[i] = true;
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[len - 1];
};

var v = wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]);
console.log(v)
// @lc code=end

