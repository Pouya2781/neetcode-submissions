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
        const visited = new Set<number>();
        const stack = [0];

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let edge of edges) {
            graph.get(edge[0]).push(edge[1]);
            graph.get(edge[1]).push(edge[0]);
        }

        while (stack.length !== 0) {
            const current = stack.pop();

            if (visited.has(current)) {
                continue;
            }

            visited.add(current);

            for (let neighbor of graph.get(current)) {
                stack.push(neighbor);
            }
        }

        return visited.size === n;
    }
}
