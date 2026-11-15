type graphTraversalNode = {
    start: number;
    finish: number;
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    public validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) {
            return false;
        }

        const graph = new Map<number, number[]>();
        const graphTraversal = new Map<number, graphTraversalNode>();
        const visited = new Set<number>();
        let time = 0;

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let edge of edges) {
            graph.get(edge[0]).push(edge[1]);
            graph.get(edge[1]).push(edge[0]);
        }

        const dfs = (node: number): void => {
            if (visited.has(node)) {
                return;
            }

            time++;
            visited.add(node);
            graphTraversal.set(node, {start: time, finish: -1});

            for (let neighbor of graph.get(node)) {
                dfs(neighbor);
            }

            time++;
            graphTraversal.get(node).finish = time;
        }

        dfs(0);

        return visited.size === n;

        // if (visited.size !== n) {
        //     return false;
        // }

        // for (let edge of edges) {
        //     if ()
        // }

        // return false;
    }
}
