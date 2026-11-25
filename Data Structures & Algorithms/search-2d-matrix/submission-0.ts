class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    public searchMatrix(matrix: number[][], target: number): boolean {
        const length = matrix.length * matrix[0].length;

        const binarySearchRec = (start: number, end: number): boolean =>  {
            if (start > end) {
                return false;
            }

            const mid = Math.floor((start + end) / 2);
            const [midRow, midCol] = this.mapIndexToIndecies(mid, matrix[0].length);

            if (matrix[midRow][midCol] === target) {
                return true;
            }

            if (matrix[midRow][midCol] < target) {
                return binarySearchRec(mid + 1, end);
            }

            return binarySearchRec(start, mid - 1);
        }

        return binarySearchRec(0, length - 1);
    }

    public mapIndexToIndecies(index: number, colCount: number): [number, number] {
        const row = Math.ceil((index + 1) / colCount) - 1;
        const col = index % colCount;
        return [row, col]
    }
}
