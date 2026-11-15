class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let nodes = new Set<string>()

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    nodes.add(`${i}-${j}`);
                }
            }
        }

        let counter = 0;

        while (nodes.size !== 0) {
            counter++;
            const node = [...nodes][0];
            this.dfsVisist(grid, node, nodes);
        }

        return counter;
    }

    public dfsVisist(grid: string[][], start: string, nodes: Set<string>): void {
        const stack = [start];

        while (stack.length !== 0) {
            const current = stack.pop();
            nodes.delete(current);
            const [row, col] = current.split('-').map(a => +a);
            grid[row][col] = '0';
            stack.push(...this.getNeighbors(current, grid));
        }
    }

    public getNeighbors(node: string, grid: string[][]): string[] {
        const [row, col] = node.split('-').map(a => +a);
        const neighbors = [];

        if (row > 0 && grid[row - 1][col] === '1') {
            neighbors.push(`${row - 1}-${col}`);
        }

        if (row < grid.length - 1 && grid[row + 1][col] === '1') {
            neighbors.push(`${row + 1}-${col}`);
        }

        if (col > 0 && grid[row][col - 1] === '1') {
            neighbors.push(`${row}-${col - 1}`);
        }

        if (col < grid[0].length - 1 && grid[row][col + 1] === '1') {
            neighbors.push(`${row}-${col + 1}`);
        }

        return neighbors;
    }
}
