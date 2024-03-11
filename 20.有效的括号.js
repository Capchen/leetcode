/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 思路：左括号入栈，右括号出栈，最后栈为空则为有效括号
 * 思路2: 使用两个字符串存索引， 然后反转字符串，判断字符串是否相当
 */
var isValid = function(s) {
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];
  const stack = [];
  for (let item of s) {
    if (left.includes(item)) {
      stack.push(left.indexOf(item));
    } else {
      if (stack.length == 0) {
        return false;
      }
      const pop = stack.pop();
      if (pop !== right.indexOf(item)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

console.log(isValid('({})}]'))
