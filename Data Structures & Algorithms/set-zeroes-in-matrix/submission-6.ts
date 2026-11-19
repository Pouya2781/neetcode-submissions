class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    public setZeroes(matrix: number[][]): void {
        let zeroFirstRow = false;
        let zeroFirstCol = false;

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] === 0) {
                zeroFirstCol = true;
                break;
            }
        }

        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[0][i] === 0) {
                zeroFirstRow = true;
                break;
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        if (zeroFirstCol) {
             for (let i = 1; i < matrix.length; i++) {
                matrix[i][0] = 0;
            }
        }

        if (zeroFirstRow) {
            for (let i = 1; i < matrix[0].length; i++) {
                matrix[0][i] = 0;
            }
        }
    }
}
