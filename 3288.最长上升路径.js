/*
 * @lc app=leetcode.cn id=3288 lang=javascript
 *
 * [3288] 最长上升路径的长度
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 * 
 * 思路是先找到k点的坐标，然后分别找到左边和右边的最长子串，最后相加减去1
 * 这会超出最大限制，需要优化
 */
var maxPathLength = function(coordinates, k) {
    const kPoint = coordinates[k];
    const sortList = coordinates.toSorted((a, b) => a[0] - b[0]);
    const index = sortList.findIndex((item) => (item[0] === kPoint[0] && item[1] === kPoint[1]));
    console.log(sortList, index);
    const len = sortList.length;
    const leftdp = new Array(index + 1).fill(1);
    const rightdp = new Array(len).fill(1);
    let max = 0;
    
    // 取左边y的最长子串
    for (let i = 1; i < index + 1; i++) {
        for (let j = 0; j < i; j++) {
            if (sortList[i][1] > sortList[j][1] && sortList[i][0] !== sortList[j][0]) {
                leftdp[i] = Math.max(leftdp[i], leftdp[j] + 1)
            }
        }
    }
    // 取右边y的最长子串
    for (let i = len - 2; i > index - 1; i--) {
        for (let j = len - 1; j > i; j--) {
            if (sortList[i][1] < sortList[j][1] && sortList[i][0] !== sortList[j][0]) {
                rightdp[i] = Math.max(rightdp[i], rightdp[j] + 1)
            }
        }
    }
    console.log(leftdp, rightdp);
    if (index === len - 1) {
        return leftdp[index];
    } else if (index === 0) {
        return rightdp[index];
    }
    max = leftdp[index] + rightdp[index] - 1;
    console.log(leftdp, rightdp);
    return max
};
// @lc code=end
const result = maxPathLength([[7,6],[5,8],[4,6],[4,3],[6,4]], 3);
console.log(result);

