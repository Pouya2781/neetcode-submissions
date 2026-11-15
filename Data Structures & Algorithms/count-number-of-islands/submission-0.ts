class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let map = new Map<string, string[]>()

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    map.set(`${i}-${j}`, []);
                }
            }
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                     if (j > 0 && grid[i][j - 1] === '1') {
                        map.get(`${i}-${j}`).push(`${i}-${j - 1}`);
                    }

                    if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
                        map.get(`${i}-${j}`).push(`${i}-${j + 1}`);
                    }
                }
            }
        }

        for (let i = 0; i < grid[0].length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[j][i] === '1') {
                    if (j > 0 && grid[j - 1][i] === '1') {
                        map.get(`${j}-${i}`).push(`${j - 1}-${i}`);
                    }

                    if (j < grid.length - 1 && grid[j + 1][i] === '1') {
                        map.get(`${j}-${i}`).push(`${j + 1}-${i}`);
                    }
                }
            }
        }

        return this.dfs(map);
    }

    public dfs(map: Map<string, string[]>): number {
        const nodes = new Set(map.keys());
        let counter = 0;

        while (nodes.size !== 0) {
            counter++;
            const node = [...nodes][0];
            this.dfsVisist(map, node, nodes);
        }

        return counter;
    }

    public dfsVisist(map: Map<string, string[]>, start: string, nodes: Set<string>): void {
        const stack = [start];

        while (stack.length !== 0) {
            const current = stack.pop();
            nodes.delete(current);
            stack.push(...map.get(current).filter(node => nodes.has(node)));
        }
    }
}
