/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 * 思路：创建两个链表，一个存储小于x的节点，一个存储大于等于x的节点，最后将两个链表合并
 */
var partition = function(head, x) {
  let left = new ListNode(0)
  let leftHead = left
  let right = new ListNode(0)
  let rightHead = right
  while (head) {
    if (head.val < x) {
      left.next = head
      left = head
    } else {
      right.next = head
      right = head
    }
    head = head.next
  }
  right.next = null
  left.next = rightHead.next
  return leftHead.next
};
// @lc code=end



