class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let reversed = 0;
        for (let i = 0; i < 31; i++) {
            if ((n & 1) === 1) {
                reversed++;
            }

            reversed *= 2;
            n = n >> 1;
        }

         if ((n & 1) === 1) {
            reversed++;
        }

        return reversed;
    }
}
