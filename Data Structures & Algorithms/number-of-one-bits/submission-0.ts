class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        const maxBinaryOrder = Math.floor(Math.log2(n));
        let oneCount = 0;

        for (let order = maxBinaryOrder; order >= 0; order--) {
            const orderPower = Math.pow(2, order);
            if (n >= orderPower) {
                n -= orderPower;
                oneCount++;
            }
        }

        return oneCount;
    }
}
