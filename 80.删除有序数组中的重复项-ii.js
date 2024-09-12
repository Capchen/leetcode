/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let i = 0
    while (i < nums.length) {
        if (nums[i] === nums[i + 2]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};
removeDuplicates([1,1,1,2,2,3]);
// @lc code=end

