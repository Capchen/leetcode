/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * 思路：使用一个虚拟节点，遍历链表，如果当前节点的值等于下一个节点的值，则删除所有值等于当前节点值的节点
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    const dummy = new ListNode(0, head);

    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            } 
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
// @lc code=end

