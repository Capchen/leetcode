/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/
// nums = [-1,-100,3,99], k = 2
var rotate = function(nums, k) {
    k %= nums.length;
    if(k === 0){return};
	nums.unshift(...nums.splice(-k,k));
};
rotate([-1,-100,3,99], 2)
// @lc code=end 

