class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    public plusOne(digits: number[]): number[] {
        let carry = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            digits[i] += carry;
            carry = digits[i] > 9 ? 1 : 0;
            digits[i] = digits[i] - 10 * carry;
        }

        if (carry === 1) {
            digits.unshift(1);
        }
        
        return digits;
    }
}
