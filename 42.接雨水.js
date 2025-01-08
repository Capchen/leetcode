/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * [4,2,0,3,2,5] 9
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 1. 动态规划
 * 2. 双指针
 */
var trap = function(height) {
  // 1. 动态规划
  // let ans = 0;
  // const n = height.length;
  // if (n == 0) {
  //     return 0;
  // }

  // const leftMax = new Array(n).fill(0);
  // leftMax[0] = height[0];
  // for (let i = 1; i < n; ++i) {
  //     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  // }

  // const rightMax = new Array(n).fill(0);
  // rightMax[n - 1] = height[n - 1];
  // for (let i = n - 2; i >= 0; --i) {
  //     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  // }

  // for (let i = 0; i < n; i++) {
  //   ans += Math.abs(Math.min(leftMax[i], rightMax[i]) - height[i]);
  // }
  // console.log(ans)
  // return ans;

  // 2. 双指针
  let ans = 0;
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
        ans += leftMax - height[left];
        ++left;
    } else {
        ans += rightMax - height[right];
        --right;
    }
  }
  return ans;
};
// @lc code=end
