/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1
    }
    const startList = []
    for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
        startList.push(i)
    }
    }
    if (startList.length === 0) {
        return -1
    }
    let j = -1
    for (let i = 0; i < startList.length; i++) {
        const element = startList[i];
        const str = haystack.slice(element, element + needle.length)
        if (str === needle) {
            j = startList[i]
            break
        }
    }
    return j
};
// @lc code=end

