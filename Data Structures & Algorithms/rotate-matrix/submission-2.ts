class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    public rotate(matrix: number[][]): void {
        for (let level = 0; level < Math.floor(matrix.length / 2); level++) {
            for (let index = level; index < matrix.length - level - 1; index++) {
                let prev: [number, number] = [level, index];
                let target: [number, number];
                let prevTemp: number = matrix[level][index];
                let temp: number;

                for (let i = 0; i < 4; i++) {
                    target = [prev[1], matrix.length - 1 - prev[0]];
                    temp = matrix[target[0]][target[1]];
                    matrix[target[0]][target[1]] = prevTemp;
                    prev = target;
                    prevTemp = temp;
                }
            }
        }
    }
}