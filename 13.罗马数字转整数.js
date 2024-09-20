/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanMap[s.substring(i, i + 2)]) {
            result += romanMap[s.substring(i, i + 2)];
            i++;
        } else {
            result += romanMap[s[i]];
        }
    }
    return result;
};
// @lc code=end

