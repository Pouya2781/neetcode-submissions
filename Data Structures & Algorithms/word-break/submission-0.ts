class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    public wordBreak(s: string, wordDict: string[]): boolean {
        const memo: boolean[] = new Array(s.length + 1).fill(null);
        memo[0] = true;

        const wordBreakRed = (end: number): boolean => {
            if (memo[end] !== null) {
                return memo[end];
            }

            for (let word of wordDict) {
                let misMatch = false;

                for (let i = word.length - 1; i >= 0; i--) {
                    if (word.charAt(i) !== s.charAt(end - word.length + i)) {
                        misMatch = true;
                        break;
                    }
                }

                if (misMatch) {
                    continue;
                }

                if (wordBreakRed(end - word.length)) {
                    memo[end] = true;
                    return true;
                }
            }

            memo[end] = false;
            return false;
        }

        return wordBreakRed(s.length);
    }
}
