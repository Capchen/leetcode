/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i]
        console.log(val)
        console.log(map.has(nums[i]))
        if (map.has(nums[i])) {
            result = [map.get(nums[i]), i]
            break
        } else {
            map.set(val, i)
        }
    }
    return result
};

twoSum([2,7,11,15], 9)
// @lc code=end

