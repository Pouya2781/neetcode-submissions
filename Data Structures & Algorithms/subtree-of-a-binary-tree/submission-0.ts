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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root && !!subRoot) {
            return false;
        }

        if (!subRoot && !!root) {
            return false;
        }

        if (!root && !subRoot) {
            return true;
        }

        if (root.val === subRoot.val && this.isSameTree(root.left, subRoot.left) && this.isSameTree(root.right, subRoot.right)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if (!root1 && !!root2) {
            return false;
        }

        if (!root2 && !!root1) {
            return false;
        }

        if (!root1 && !root2) {
            return true;
        }

        return root1.val === root2.val && this.isSameTree(root1.left, root2.left) && this.isSameTree(root1.right, root2.right);
    }
}
