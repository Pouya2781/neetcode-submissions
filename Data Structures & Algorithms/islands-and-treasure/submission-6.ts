class Solution {
    /**
     * @param {number[][]} grid
     */
    public islandsAndTreasure(grid: number[][]): void {
        const visited: boolean[][] = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
        const queue: number[][] = [];
        let queueIndex: number = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 0) {
                    queue.push([row, col]);
                    visited[row][col] = true;
                }
            }
        }

        const isLand = (row: number, col: number): boolean => {
            return grid[row][col] !== -1;
        }

        let queueSizeAtLevel = queue.length;
        let distance = 0;
        while (queueIndex < queue.length) {
            if (queueIndex === queueSizeAtLevel) {
                queueSizeAtLevel = queue.length;
                distance++;
            }

            const [row, col] = queue[queueIndex];

            // if (visited[row][col]) {
            //     queueIndex++;
            //     continue;
            // }

            grid[row][col] = distance;
            // visited[row][col] = true;

             if (row > 0 && isLand(row - 1, col) && !visited[row - 1][col]) {
                visited[row - 1][col] = true;
                queue.push([row - 1, col]);
            }

            if (row < grid.length - 1 && isLand(row + 1, col) && !visited[row + 1][col]) {
                visited[row + 1][col] = true;
                queue.push([row + 1, col]);
            }

            if (col > 0 && isLand(row, col - 1) && !visited[row][col - 1]) {
                visited[row][col - 1] = true;
                queue.push([row, col - 1]);
            }

            if (col < grid[0].length - 1 && isLand(row, col + 1) && !visited[row][col + 1]) {
                visited[row][col + 1] = true;
                queue.push([row, col + 1]);
            }

            queueIndex++;
        }
    }
}
