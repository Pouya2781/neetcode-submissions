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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    public buildTree(preorder: number[], inorder: number[]): TreeNode {
        // const preOrderMap = new Map(preorder.map((value, index) => [value, index]));
        const inOrderMap = new Map(inorder.map((value, index) => [value, index]));

        const buildTreeRec = (preOrderStart: number, preOrderEnd: number, inOrderStart: number, inOrderEnd: number) => {
            if (preOrderStart > preOrderEnd) {
                return null
            }

            const rootValue = preorder[preOrderStart];
            const inOrderRootIndex = inOrderMap.get(rootValue);
            const leftSubTreeLength = inOrderRootIndex - inOrderStart;
            const rightSubTreeLength = inOrderEnd - inOrderRootIndex;

            return {
                val: rootValue,
                left: buildTreeRec(
                    preOrderStart + 1,
                    preOrderStart + leftSubTreeLength,
                    inOrderStart,
                    inOrderRootIndex - 1
                ),
                right: buildTreeRec(
                    preOrderStart + leftSubTreeLength + 1,
                    preOrderStart + leftSubTreeLength + rightSubTreeLength,
                    inOrderRootIndex + 1,
                    inOrderEnd
                )
            };
        }
        
        const root = buildTreeRec(0, preorder.length - 1, 0, preorder.length - 1);

        return root;
    }
}
