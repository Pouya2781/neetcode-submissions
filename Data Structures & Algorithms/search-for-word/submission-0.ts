class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    public exist(board: string[][], word: string): boolean {
        let visited: boolean[][];
        let currentWord: string;

        const backTrack = (node: [number, number]): boolean => {
            if (word.charAt(currentWord.length) !== board[node[0]][node[1]]) {
                return false;
            }

            if (currentWord.length + 1 === word.length) {
                return true;
            }

            visited[node[0]][node[1]] = true;
            currentWord += board[node[0]][node[1]];

            if (node[0] > 0 && !visited[node[0] - 1][node[1]] && backTrack([node[0] - 1, node[1]])) {
                return true;
            }

            if (node[0] < board.length - 1 && !visited[node[0] + 1][node[1]] && backTrack([node[0] + 1, node[1]])) {
                return true;
            }

            if (node[1] > 0 && !visited[node[0]][node[1] - 1] && backTrack([node[0], node[1] - 1])) {
                return true;
            }

            if (node[1] < board[0].length - 1 && !visited[node[0]][node[1] + 1] && backTrack([node[0], node[1] + 1])) {
                return true;
            }

            visited[node[0]][node[1]] = false;
            currentWord = currentWord.slice(0, currentWord.length - 1);
            return false;
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                visited = new Array(board.length).fill(0).map(_ => new Array(board[0].length).fill(false));
                currentWord = "";

                if (backTrack([i, j])) {
                    return true;
                }
            }
        }

        return false;
    }
}
