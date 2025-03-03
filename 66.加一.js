/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1]++;
    return digits;
  }
  const res = [0, ...digits];
  const len = res.length;
  res[len - 1] = 0;
  let temp = 1;
  
  for (let i = len - 2; i > -1; i--) {
    const sum = res[i] + temp;
    if (sum < 10) {
      res[i] = sum;
      temp = 0;
      return res;
    } else {
      res[i] = 0;
      temp = 1;
    }
  }
  if (res[0] === 0) {
    res.shift();
  }
  return res;
};
console.log(plusOne([0]));
// @lc code=end

