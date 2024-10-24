/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[0]) {
            if (s.slice(i) + s.slice(0, i) === goal) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

console.log(rotateString('aabbcc', 'bccaab')) // true