class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    public setZeroes(matrix: number[][]): void {
        const zeroRowSet = new Set<number>();
        const zeroColSet = new Set<number>();

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    zeroRowSet.add(i);
                    zeroColSet.add(j);
                }
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (zeroRowSet.has(i) || zeroColSet.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
