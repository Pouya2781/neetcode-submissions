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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 == null) {
            return list2;
        }

        if (list2 == null) {
            return list1;
        }

        const head: ListNode = list1.val < list2.val ? list1 : list2;
        let prev: ListNode = head;
        let current: ListNode = head;
        

        while (list1 != null && list2 != null) {
            prev = current;

           if (list1.val < list2.val) {
            current = list1;
            list1 = list1.next;
           } else {
            current = list2;
            list2 = list2.next;
           }

            prev.next = current;
        }

        if (list1 != null) {
            current.next = list1;
        }

        if (list2 != null) {
            current.next = list2;
        }

        return head;
    }
}
