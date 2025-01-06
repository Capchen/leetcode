/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 双指针，向内移动短板，短板决定容器的容积，改变短板才有可能增大容积
 * 如果使用暴力法，时间复杂度为O(n^2)
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0
    }
    let max = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let h = Math.min(height[left], height[right])
        max = Math.max(max, h * (right - left)) // 容积就是短板的高度乘以两个指针之间的距离
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};
// @lc code=end
