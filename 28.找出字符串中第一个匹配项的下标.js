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
 * 暴力方法
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

// KMP算法，关键是获取最长相等前后缀数组，
// 通过前后缀数组，可以获取到每个字符匹配失败时，应该跳转到的位置 跳转步数 = 已匹配的字符数 - 对应的前后缀数组
// ABABCABAB
const computeLPS = (pattern) => {
    const lps = new Array(pattern.length).fill(0)
    let len = 0
    let i = 1
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++
            lps[i] = len
            i++
        } else {
            if (len !== 0) {
                len = lps[len - 1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }
    return lps
}

[0,0]