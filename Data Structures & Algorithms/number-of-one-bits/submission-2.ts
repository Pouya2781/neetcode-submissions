class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let oneCount = 0;

        while (n > 0) {
            const maxBinaryOrder = Math.floor(Math.log2(n));
            const orderPower = Math.pow(2, maxBinaryOrder);
            if (n >= orderPower) {
                n -= orderPower;
                oneCount++;
            }
        }

        return oneCount;
    }
}
