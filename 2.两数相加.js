/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * l1 = [2,4,3], l2 = [5,6,4]
 */
var addTwoNumbers = function(l1, l2) {
    let start = new ListNode(0);
    let result = start;
    let temp = 0;
    if (l1.val + l2.val >= 10) {
        temp = 1;
    }
    start.val = (l1.val + l2.val) % 10;
    let next1 = l1.next;
    let next2 = l2.next;
    while(next1 || next2 || temp) {
        let node = new ListNode(0);
        start.next = node;
        node.val = (next1 ? next1.val : 0) + (next2 ? next2.val : 0) + temp;
        if (node.val >= 10) {
            temp = 1;
            node.val = node.val % 10;
        } else {
            temp = 0;
        }
        next1 = next1 ? next1.next : null;
        next2 = next2 ? next2.next : null;
        start = node;
    }
    return result;
};
// @lc code=end

