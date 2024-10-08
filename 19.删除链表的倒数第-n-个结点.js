/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 * 思路1：快慢指针，快指针先走n步，然后快慢指针一起走，当快指针走到尾部时，慢指针的下一个节点就是要删除的节点
 * 思路2: 遍历一遍链表，获取链表长度，然后删除第len-n个节点
 */
var removeNthFromEnd = function(head, n) {
    if (!head ) {
        return null;
    }
    let l = 1;
    let node = head;
    while (node.next) {
        l++;
        node = node.next;
    }
    if (l === 1) {
        return null;
    }
    if (l === n) {
        return head.next;
    }
    let cur = head;
    for (let i = 0; i < l - n - 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head

};
// @lc code=end

