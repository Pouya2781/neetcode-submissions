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
     * @param {number} k
     * @return {number}
     */
    public kthSmallest(root: TreeNode | null, k: number): number {
        const inOrder = [];

        const dfs = (root: TreeNode | null): void => {
            if (root == null) {
                return;
            }

            dfs(root.left);
            inOrder.push(root.val);
            dfs(root.right);
        }

        dfs(root);

        return inOrder[k - 1];
    }
}
