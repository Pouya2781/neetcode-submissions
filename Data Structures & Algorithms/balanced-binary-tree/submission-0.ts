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
    public isBalanced(root: TreeNode | null): boolean {
        const isBalancedRec = (root: TreeNode | null): number => {
            if (root == null) {
                return 0;
            }

            const leftSubTreeHeight = isBalancedRec(root.left);

            if (leftSubTreeHeight === -1) {
                return -1;
            }

            const rightSubTreeHeight = isBalancedRec(root.right);

            if (rightSubTreeHeight === -1) {
                return -1;
            }

            return Math.abs(leftSubTreeHeight - rightSubTreeHeight) <= 1 ?
                        Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1 :
                        -1;
        }

        return isBalancedRec(root) !== -1;
    }
}
