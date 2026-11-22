class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    public countSubstrings(s: string): number {
        const memo: boolean[][] = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(false));

        let counter = 0;
        for (let i = s.length; i >= 0; i--) {
            for (let j = i; j < s.length; j++) {
                if (s.charAt(i) === s.charAt(j) && (j - i <= 2 || memo[i + 1][j - 1])) {
                    counter++;
                    memo[i][j] = true;
                    continue;
                }

                memo[i][j] = false;
            }
        }

        return counter;
    }
}
