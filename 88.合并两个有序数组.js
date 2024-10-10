/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 思路一：合并后排序
 * 时间复杂度：O((m+n)log(m+n))
 * 空间复杂度：O(1)
 * 思路二：双指针
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(m)
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};
// @lc code=end

