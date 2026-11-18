class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    public numDecodings(s: string): number {
        const digits = s.split('').map(letter => +letter);
        const memo = new Array(digits.length).fill(-1);

        const numDecodingsRec = (digits: number[], end: number, memo: number[]): number => {
            if (end < 0) {
                return 1;
            }

            if (memo[end] !== -1) {
                return memo[end];
            }

            let oneDigitDecode = 0;
            let twoDigitDecode = 0;

            if (digits[end] !== 0) {
                oneDigitDecode = numDecodingsRec(digits, end - 1, memo);
            }

            if (end > 0 && digits[end - 1] !== 0 && 26 >= +`${digits[end - 1]}${digits[end]}`) {
                twoDigitDecode = numDecodingsRec(digits, end - 2, memo);
            }

            memo[end] = oneDigitDecode + twoDigitDecode;
            return oneDigitDecode + twoDigitDecode;
        }

        return numDecodingsRec(digits, digits.length - 1, memo);
    }
}
