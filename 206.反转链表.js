/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 * 思路：迭代列表，用两个指针，一个指向前一个节点，一个指向当前节点，
 * 相当于一个窗口，每次移动窗口，将当前节点的next指向前一个节点
 */
var reverseList = function(head) {
  // 1. 迭代
  // let prev = null;
  // let curr = head;
  // while (curr) {
  //   let next = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }
  // return prev;

  // 2. 递归
  if (!head || !head.next) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
// @lc code=end

