/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * gas = [2,3,4], cost = [3,4,3]
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length
    let i = 0
    while(i < n) {
        let oil = 0
        let count = 0
        while (count < n) {
            let index = i+count >= n ? i+count-n: i+count
            oil = oil + gas[index] - cost[index]
            if (oil < 0) {
                break
            } else {
                count++
            }
        }
        if (oil >= 0) {
            return i
        } else {
            i = i+ count + 1
        }
    }
    return -1
};

// @lc code=end

