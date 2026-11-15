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
     * @return {boolean}
     */
    public isValidBST(root: TreeNode | null): boolean {
        const inOrder = [];

        const dfs = (root: TreeNode | null) => {
            if (root == null) {
                return;
            }

            dfs(root.left);
            inOrder.push(root.val);
            dfs(root.right);
        }

        dfs(root);

        for (let i = 1; i < inOrder.length; i++) {
            if (inOrder[i] <= inOrder[i - 1]) {
                return false;
            }
        }

        return true;
    }
}
