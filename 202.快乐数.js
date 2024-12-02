/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let str = n + '';
    while (str.length > 1) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Math.pow(parseInt(str[i]), 2);
        }
        str = sum + '';
    }
    return str === '1' || str === '7';
};
// @lc code=end

console.log(isHappy(2)); // true