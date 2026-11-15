enum Direction {
    Up,
    Down,
    Left,
    Right
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    public spiralOrder(matrix: number[][]): number[] {
        const cellCount = matrix[0].length * matrix.length;
        const result: number[] = [];
        let level = 0;
        let counter = 0;
        let row = 0;
        let col = 0;
        let direction: Direction = Direction.Right;

        while (counter < cellCount) {
            result.push(matrix[row][col]);

            switch (direction) {
                case Direction.Right:
                    if (col === matrix[0].length - level - 1) {
                        direction = Direction.Down;
                        row++;
                        break;
                    }

                    col++;
                    break;
                case Direction.Down:
                    if (row === matrix.length - level - 1) {
                        direction = Direction.Left;
                        col--;
                        break;
                    }

                    row++;
                    break;
                case Direction.Left:
                    if (col === level) {
                        direction = Direction.Up;
                        row--;
                        break;
                    }

                    col--;
                    break;
                case Direction.Up:
                    if (row === level + 1) {
                        direction = Direction.Right;
                        col++;
                        level++;
                        break;
                    }

                    row--;
                    break;
            }

            counter++;
        }

        return result;
    }
}
