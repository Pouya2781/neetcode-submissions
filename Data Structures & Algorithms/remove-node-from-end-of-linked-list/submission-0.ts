/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    public removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let current = head;
        let length = 0;

        while (current != null) {
            length++;
            current = current.next;
        }

        const preIndex = length - n - 1;

        if (preIndex === -1) {
            return head.next
        }

        current = head;
        for (let index = 0; index < length - n - 1; index++) {
            current = current.next;
        }

        current.next = current.next.next;

        return head;
    }
}
