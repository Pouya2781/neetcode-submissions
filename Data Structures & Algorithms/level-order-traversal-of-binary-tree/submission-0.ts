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
     * @return {number[][]}
     */
    public levelOrder(root: TreeNode | null): number[][] {
        const levelOrders: number[][] = [];

        const dfs = (root: TreeNode, depth: number) => {
            if (root == null) {
                return;
            }

            if (levelOrders[depth] == null) {
                levelOrders.push([]);
            }

            levelOrders[depth].push(root.val);

            dfs(root.left, depth + 1);
            dfs(root.right, depth + 1);
        }

        dfs(root, 0);

        return levelOrders;
    }
}
