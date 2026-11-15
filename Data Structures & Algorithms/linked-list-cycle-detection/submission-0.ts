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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let testIndex: number = 0;

        while (true) {
            let target = head;
            for (let i = 0; i < testIndex; i++) {
                target = target.next;
            }

            if (target == null) {
                return false;
            }

            let pointer = head;
            for (let i = 0; i < testIndex - 1; i++) {
                pointer = pointer.next;

                if (pointer === target) {
                    return true;
                }
            }

            testIndex++;
        }
    }
}
