/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const map = new Map()
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push(nums[i])
    } else {
      map.set(nums[i], 1)
    }
  }
  return result
};
// @lc code=end

