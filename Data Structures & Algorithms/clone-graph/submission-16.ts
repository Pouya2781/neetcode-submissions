/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    public cloneGraph(node: Node | null): Node {
        if (node == null) {
            return null;
        }

        const closedSet = new Set<Node>();
        const stack = [node];
        const nodeMap = new Map<number, Node>();

        while (stack.length !== 0) {
            const current = stack.pop();

            if (closedSet.has(current)) {
                continue;
            }

            closedSet.add(current);

            if (!nodeMap.has(current.val)) {
                nodeMap.set(current.val, {val: current.val, neighbors: []})
            }

            for (let neighbor of current.neighbors) {
                if (!closedSet.has(neighbor)) {
                    stack.push(neighbor);
                }

                if (!nodeMap.has(neighbor.val)) {
                    nodeMap.set(neighbor.val, {val: neighbor.val, neighbors: []})
                }

                nodeMap.get(current.val).neighbors.push(nodeMap.get(neighbor.val));
            }
        }

        return nodeMap.get(1);
    }
}
