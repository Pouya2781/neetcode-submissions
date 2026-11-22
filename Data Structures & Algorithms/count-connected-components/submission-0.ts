class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    public countComponents(n: number, edges: number[][]): number {
        const neighbors: number[][] = new Array(n).fill(0).map(_ => []);
        const visited = new Set<number>();

        for (let edge of edges) {
            neighbors[edge[0]].push(edge[1]);
            neighbors[edge[1]].push(edge[0]);
        }

        const dfsVisit = (start: number): void => {
            const stack = [start];

            while (stack.length > 0) {
                const current = stack.pop();
                visited.add(current);

                for (let neighbor of neighbors[current]) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }


        let counter = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfsVisit(i);
                counter++;
            }
        }

        return counter;
    }
}
