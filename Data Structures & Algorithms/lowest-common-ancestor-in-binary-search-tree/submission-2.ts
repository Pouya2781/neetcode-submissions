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
  
class TraceData {
    public lca: TreeNode;
    public foundP: boolean;
    public foundQ: boolean;

    public constructor() {
        this.lca = null;
        this.foundP = false;
        this.foundQ = false;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    public lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ): TreeNode {
        return this.lowestCommonAncestorRec(root, p, q).lca;
    }

    public lowestCommonAncestorRec(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
        prevTraceData: TraceData = new TraceData()
    ): TraceData {
        const currentTraceData = new TraceData();

        if (root == null) {
            return currentTraceData;
        }

        if (root.val === p.val) {
            currentTraceData.foundP = true;
        }

        if (root.val === q.val) {
            currentTraceData.foundQ = true;
        }

        const combinedTraceData = {
            lca: null,
            foundP: prevTraceData.foundP || currentTraceData.foundP,
            foundQ: prevTraceData.foundQ || currentTraceData.foundQ
        }

        let leftTraceData: TraceData, rightTraceData: TraceData;

        if (!combinedTraceData.foundP || !combinedTraceData.foundQ) {
            leftTraceData = this.lowestCommonAncestorRec(root.left, p, q, combinedTraceData);

            if (leftTraceData.lca != null) {
                return leftTraceData;
            }
            
            combinedTraceData.foundP = combinedTraceData.foundP || leftTraceData.foundP;
            combinedTraceData.foundQ = combinedTraceData.foundQ || leftTraceData.foundQ;
            currentTraceData.foundP = currentTraceData.foundP || leftTraceData.foundP;
            currentTraceData.foundQ = currentTraceData.foundQ || leftTraceData.foundQ;
        }
    

        if (!combinedTraceData.foundP || !combinedTraceData.foundQ) {
            rightTraceData = this.lowestCommonAncestorRec(root.right, p, q, combinedTraceData);

            if (rightTraceData.lca != null) {
                return rightTraceData;
            }

            currentTraceData.foundP = currentTraceData.foundP || rightTraceData.foundP;
            currentTraceData.foundQ = currentTraceData.foundQ || rightTraceData.foundQ;
        }

        if (currentTraceData.foundP && currentTraceData.foundQ) {
            currentTraceData.lca = root;
        }

        return currentTraceData;
    }
}