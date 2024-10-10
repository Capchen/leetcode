/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * l1 = [1,2,4], l2 = [2,3,4]
 * 思路：两两比较，小的放前面，递归
 */
var mergeTwoLists = function(list1, list2) {
  // if (!list1) return list2;
  // if (!list2) return list1;
  // if (list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }


  // 创建一个哑节点作为合并后链表的头部
  const dummy = new ListNode(0);
  let current = dummy;

  // 当两个链表都不为空时，比较它们的值
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // 如果其中一个链表已经为空，将另一个链表的剩余部分直接接到结果链表的末尾
  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }

  // 返回合并后的链表（去掉哑节点）
  return dummy.next;
};
// @lc code=end

