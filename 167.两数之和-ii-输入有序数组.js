/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const val = target - numbers[i]
        let j = i+1
        while(j < numbers.length) {
            if (numbers[j] === val) {
                break
            } else {
                j++
            }
        }
        if (numbers[i] + numbers[j] === target) {
            return [i+1, j+1]
        }
    }
};
console.log(twoSum([2,3,4], 6))
// @lc code=end

