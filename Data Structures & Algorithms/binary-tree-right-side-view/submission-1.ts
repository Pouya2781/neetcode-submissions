/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    public rightSideView(root: TreeNode | null): number[] {
        if (root == null) {
            return [];
        }

        const rightSideViewNodes: number[] = [];

        let queue: TreeNode[] = [root];

        while (queue.length > 0) {
            let tempQueue: TreeNode[] = [];
            rightSideViewNodes.push(queue.at(-1).val);

            while (queue.length > 0) {
                const current = queue.shift();
                
                if (current.left != null) {
                    tempQueue.push(current.left)
                }

                if (current.right != null) {
                    tempQueue.push(current.right)
                }
            }

            queue = tempQueue;
        }

        return rightSideViewNodes;
    }
}
