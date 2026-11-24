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
     * @return {number}
     */
    public diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;

        const diameterOfBinaryTreeRed = (root: TreeNode | null): number => {
            if (root == null) {
                return 0;
            }

            const leftSubTreeHeight = diameterOfBinaryTreeRed(root.left);
            const rightSubTreeHeight = diameterOfBinaryTreeRed(root.right);
            const maxCurrentNodeCrossingPath = leftSubTreeHeight + rightSubTreeHeight + 1;
            max = Math.max(max, maxCurrentNodeCrossingPath);

            return Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1;
        }

        diameterOfBinaryTreeRed(root);

        return max - 1;
    }
}
