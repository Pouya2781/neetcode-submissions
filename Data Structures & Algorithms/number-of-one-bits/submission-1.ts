class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let oneCount = 0;
        let result = n;

        while (result > 0) {
             if (result % 2) {
                oneCount++;
            }
            
            result = Math.floor(result / 2);
        }

        return oneCount;
    }
}
