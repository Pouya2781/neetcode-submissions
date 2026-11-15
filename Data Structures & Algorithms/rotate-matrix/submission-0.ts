const enum Direction {
    Up,
    Down,
    Right,
    Left
}

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
                    target = this.getTargetIndecies([...prev], matrix.length, level);
                    temp = matrix[target[0]][target[1]];
                    matrix[target[0]][target[1]] = prevTemp;
                    prev = target;
                    prevTemp = temp;
                }
            }
        }
    }

    public getTargetIndecies(indecies: [number, number], size: number, level: number): [number, number] {
        const stepCount = size - (level * 2) - 1;
        let currentDirection: Direction = this.getCurrentDirection(indecies, size, level);

        for (let i = 0; i < stepCount; i++) {
            switch (currentDirection) {
                case Direction.Right:
                    indecies[1]++;
                    break;
                case Direction.Left:
                    indecies[1]--;
                    break;
                case Direction.Up:
                    indecies[0]--;
                    break;
                case Direction.Down:
                    indecies[0]++;
                    break;
            }
            currentDirection = this.getCurrentDirection(indecies, size, level);
        }

        return indecies;
    }

    public getCurrentDirection(indecies: [number, number], size: number, level: number): Direction {
        if (indecies[0] === level && indecies[1] !== size - level - 1) {
            return Direction.Right;
        }

        if (indecies[0] === size - level - 1 && indecies[1] !== level) {
            return Direction.Left;
        }

        if (indecies[1] === level && indecies[0] !== level) {
            return Direction.Up;
        }

        if (indecies[1] === size - level - 1 && indecies[0] !== size - level - 1) {
            return Direction.Down;
        }
    }
}