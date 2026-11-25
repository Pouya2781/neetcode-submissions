class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    public isValidSudoku(board: string[][]): boolean {
        for (let row = 0; row < 9; row++) {
            const rowSet = new Set<string>();

            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    continue;
                }

                if (rowSet.has(board[row][col])) {
                    return false;
                }

                rowSet.add(board[row][col]);
            }
        }

       for (let col = 0; col < 9; col++) {
            const colSet = new Set<string>();

            for (let row = 0; row < 9; row++) {
                if (board[row][col] === '.') {
                    continue;
                }

                if (colSet.has(board[row][col])) {
                    return false;
                }

                colSet.add(board[row][col]);
            }
        }

        for (let recRow = 0; recRow < 3; recRow++) {
            for (let recCol = 0; recCol < 3; recCol++) {
                const recSet = new Set<string>();

                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const finalRow = recRow * 3 + row;
                        const finalCol = recCol * 3 + col;

                        if (board[finalRow][finalCol] === '.') {
                            continue;
                        }

                        if (recSet.has(board[finalRow][finalCol])) {
                            return false;
                        }
                        
                        recSet.add(board[finalRow][finalCol]);
                    }
                }
            }
        }

        return true;
    }
}
