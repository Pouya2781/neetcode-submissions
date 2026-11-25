class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    public maxAreaOfIsland(grid: number[][]): number {
        const visited: boolean[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
        let maxArea = 0;
        let area = 0;

        const isLand = (row: number, col: number): boolean => {
            return grid[row][col] === 1;
        }

        const dfsVisitRec = (row: number, col: number) => {
            area++;
            visited[row][col] = true;

            if (row > 0 && isLand(row - 1, col) && !visited[row - 1][col]) {
                dfsVisitRec(row - 1, col);
            }

            if (row < grid.length - 1 && isLand(row + 1, col) && !visited[row + 1][col]) {
                dfsVisitRec(row + 1, col);
            }

            if (col > 0 && isLand(row, col - 1) && !visited[row][col - 1]) {
                dfsVisitRec(row, col - 1);
            }

            if (col < grid[0].length - 1 && isLand(row, col + 1) && !visited[row][col + 1]) {
                dfsVisitRec(row, col + 1);
            }
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (isLand(row, col) && !visited[row][col]) {
                    area = 0;
                    dfsVisitRec(row, col);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}
