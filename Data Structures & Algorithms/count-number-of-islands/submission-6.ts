class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let counter = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    counter++;
                    this.dfsVisist(grid, i, j);
                }
            }
        }

        return counter;
    }

    public dfsVisist(grid: string[][], row: number, col: number): void {
        const stack = [[row, col]];

        while (stack.length !== 0) {
            const current = stack.pop();
            stack.push(...this.visit(current[0], current[1], grid));
        }
    }

    public visit(row: number, col: number, grid: string[][]): number[][] {
        const neighbors = [];

        grid[row][col] = '0';

        if (row > 0 && grid[row - 1][col] === '1') {
            neighbors.push([row - 1, col]);
        }

        if (row < grid.length - 1 && grid[row + 1][col] === '1') {
            neighbors.push([row + 1, col]);
        }

        if (col > 0 && grid[row][col - 1] === '1') {
            neighbors.push([row, col - 1]);
        }

        if (col < grid[0].length - 1 && grid[row][col + 1] === '1') {
            neighbors.push([row, col + 1]);
        }

        return neighbors;
    }
}
