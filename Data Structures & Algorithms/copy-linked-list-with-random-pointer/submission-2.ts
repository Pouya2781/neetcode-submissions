// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    public copyRandomList(head: Node | null): Node {
        if (head == null) {
            return null;
        }

        const randomMap: Map<number, number> = new Map<number, number>();
        const nodeMap: Map<Node, number> = new Map<Node, number>();
        const nodes: Node[] = [];
        const newNodes: Node[] = [];

        let current = head;
        let index = 0;
        while (current != null) {
            nodes.push(current);
            nodeMap.set(current, index);
            newNodes.push(new Node(current.val));
            current = current.next;
            index++;
        }

        for (let i = 0; i < nodes.length; i++) {
            randomMap.set(i, nodeMap.get(nodes[i].random));
        }

        for (let i = 0; i < newNodes.length - 1; i++) {
            newNodes[i].next = newNodes[i + 1];
            newNodes[i].random = newNodes[randomMap.get(i)];
        }

        newNodes[newNodes.length - 1].random = newNodes[randomMap.get(newNodes.length - 1)];

        return newNodes[0];
    }
}
