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
     * @return {void}
     */
    public reorderList(head: ListNode | null): void {
        let current = head;
        const nodeArray = [];

        while (current != null) {
            nodeArray.push(current);
            current = current.next;
        }

        let len = Math.floor(nodeArray.length / 2);
        const isEven = nodeArray.length % 2 === 0;
        
        if (isEven) {
            len--;
        }
    
        for (let i = 0; i < len; i++) {
            nodeArray[i].next = nodeArray[nodeArray.length - i - 1];
            nodeArray[nodeArray.length - i - 1].next = nodeArray[i + 1];
        }

        // if (isEven) {
        //     nodeArray[Math.floor(nodeArray.length / 2)].next = null;
        // }

        nodeArray[Math.floor(nodeArray.length / 2)].next = null;
    }
}
