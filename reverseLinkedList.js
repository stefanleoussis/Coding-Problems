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
 *
 * Solved June 8th 2022
 */
var reverseList = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let pt1 = head.next;
  let pt2 = head.next;
  head.next = null;

  pt2 = pt1.next;

  while (pt2 != null) {
    pt1.next = head;

    head = pt1;
    pt1 = pt2;
    pt2 = pt2.next;
  }

  pt1.next = head;

  return pt1;
};
