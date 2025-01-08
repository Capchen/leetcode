/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 因为对输出顺序不做要求，所以可以先排序
 * 排序后可以用双指针法，先固定一个数，然后用双指针去找另外两个数
 * 优化：如果当前元素大于0，那么后面的元素都大于0，直接结束循环
 * 如果当前元素和前一个元素相等，那么跳过这个元素,跳过元素是因为已经找到过一次了，不需要再找一次
 * 如果当前元素和下一个元素相等，那么跳过这个元素
 * 
 */
var threeSum = function(nums) {
    // 先排序
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length - 2; i++) {
        // 如果当前元素大于0，那么后面的元素都大于0，直接结束循环
        if (nums[i] > 0) break
        // 如果当前元素和前一个元素相等，那么跳过这个元素
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                // 如果当前元素和下一个元素相等，那么跳过这个元素
                while (left < right && nums[left] === nums[left + 1]) left++
                // 如果当前元素和上一个元素相等，那么跳过这个元素
                while (left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res
};
threeSum([-4, -1, -1, 0, 1, 2])
// @lc code=end

