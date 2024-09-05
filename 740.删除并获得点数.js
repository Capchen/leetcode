/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 我来理解一下为什么可以转换为打家劫舍问题：
 * 把原数组转换成一个新数组，
 * 新数组的下标i所对应的值为原数组的元素i在原数组中数字的总和，
 * 比如原数组[2, 2, 3, 3, 3, 4],转换为新数组就是[0, 0, 4, 9, 4]。
 * 在新数组中，下标0和1表示在原数组中没有0和1这两个数，新数组下标2的值是4，表示在原数组中，所有2的总和是4。
 * 转换的目的就是可以从新数组中得到删除nums[i]而得到的点数，也就是可以打劫的金额。
 * 因为删除nums[i]后，还要删除nums[i] + 1和nums[i] - 1，在新数组中就意味着不能取相邻的元素，
 * 不能取相邻的元素和打家劫舍也是一样的。接下来就可以使用打家劫舍的方式解答了
 */
var deleteAndEarn = function(nums) {
    let maxVal = 0;
    for (const num of nums) {
        maxVal = Math.max(maxVal, num);
    }
    const sum = new Array(maxVal + 1).fill(0);
    for (const num of nums) {
        sum[num] += num;
    }
    return rob(sum);

    function rob(nums) {
        const size = nums.length;
        let first = nums[0], second = Math.max(nums[0], nums[1]);
        for (let i = 2; i < size; i++) {
            const temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
};
// @lc code=end

