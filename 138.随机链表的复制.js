/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * 思路：使用map存储新节点，然后遍历新节点赋予新值
 */
var copyRandomList = function(head) {
  const map = new Map();
  let node = head;
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }
  node = head;
  while (node) {
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random) || null;
    node = node.next;
  }
  return map.get(head);
};
// @lc code=end

