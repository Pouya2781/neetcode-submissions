class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    public longestCommonSubsequence(text1: string, text2: string): number {
        const memo = new Array(text1.length).fill(0).map(_ => new Array(text2.length).fill(-1));

        const longestCommonSubsequenceRec = (end1: number, end2: number): number => {
            if (end1 === -1 || end2 === -1) {
                return 0;
            }

            if (memo[end1][end2] !== -1) {
                return memo[end1][end2];
            }

            const lcs = text1.charAt(end1) === text2.charAt(end2) ?
                                longestCommonSubsequenceRec(end1 - 1, end2 - 1) + 1 :
                                Math.max(
                                    longestCommonSubsequenceRec(end1 - 1, end2),
                                    longestCommonSubsequenceRec(end1, end2 - 1)
                                );
            memo[end1][end2] = lcs;
            return lcs;
        }

        return longestCommonSubsequenceRec(text1.length - 1, text2.length - 1);
    }
}
