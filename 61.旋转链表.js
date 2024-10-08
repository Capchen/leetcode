/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 思路：先遍历一遍链表，得到链表长度n，然后k对n取余，得到实际需要移动的次数
 * 1. 先将链表闭合成环
 * 2. 找到新的尾部，新的头部
 * 3. 断开环
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let l = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        l++;
    }
    // 首尾相连
    cur.next = head;

    let move = k % l;

    let newTail = head; // 新的尾部
    for (let i = 0; i < l - move - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next; // 新的头部
    newTail.next = null; // 断开环
    return newHead;
};
// @lc code=end

