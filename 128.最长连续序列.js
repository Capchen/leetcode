/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 用暴力法，以每一项为出发点去算最大长度
 * 优化： 用set去重，遍历set去找起点，如果set中没有当前元素-1，那么当前元素就是起点，然后往后找，找到最大长度
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    const set = new Set(nums)
    let longestStreak = 0
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num
            let currentStreak = 1
            while (set.has(currentNum + 1)) {
                currentNum += 1
                currentStreak += 1
            }
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
    return longestStreak
};
longestConsecutive([7,3,0,2,5,8,4,6,0,1])
// @lc code=end

// 第二种方案，先排序，然后遍历一遍，找到最大长度
var longestConsecutive = function(nums) {
    const len = nums.length
    if(len === 0) return 0
    const newList = nums.sort((a,b) => a - b)
    const map = new Map()
    let max = 1
    for(let i = 0; i < len; i++) {
        if (map.has(newList[i] - 1)) {
            map.set(newList[i], map.get(newList[i] - 1) + 1)
            max = Math.max(max, map.get(newList[i] - 1) + 1)
        } else {
            map.set(newList[i], 1)
        }
    }
    return max
};