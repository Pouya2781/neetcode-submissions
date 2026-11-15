class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    public uniquePaths(m: number, n: number): number {
        const pathCount = new Array(m).fill(0).map(_ => new Array(n).fill(0));

        for (let col = 0; col < n; col++) {
            pathCount[0][col] = 1;
        }

        for (let row = 0; row < m; row++) {
            pathCount[row][0] = 1;
        }

        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                pathCount[row][col] = pathCount[row - 1][col] + pathCount[row][col - 1];
            }
        }

        return pathCount[m - 1][n - 1];
    }
}
