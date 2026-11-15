class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    public getSum(a: number, b: number): number {
        let carry = 0;
        let sum = [];

        const xor = (...bits: number[]): number => {
            return bits.reduce((acc, bit) => {
                if (bit === 0) {
                    return acc;
                }

                if (acc === 1) {
                    return 0;
                }

                return 1;
            }, 0);
        };

        const and = (...bits: number[]): number => {
            return bits.reduce((acc, bit) => acc & bit, 1);
        };

        const or = (...bits: number[]): number => {
            return bits.reduce((acc, bit) => acc | bit, 0);
        };

        for (let index = 0; index < 32; index++) {
            const aBit = (a & 1) === 1 ? 1 : 0;
            const bBit = (b & 1) === 1 ? 1 : 0;

            a = a >> 1;
            b = b >> 1;
            

            sum.push(xor(aBit, bBit, carry));
            carry = or(and(aBit, bBit), and(aBit, carry), and(bBit, carry));
        }

        sum.push(carry);

        console.log(sum);

        let result = 0;
        while (sum.length !== 0) {
            result = result << 1;
            result = result | sum.pop();
        }

        return result;
    }
}
