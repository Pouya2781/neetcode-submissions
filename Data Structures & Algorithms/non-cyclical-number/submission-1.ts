class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    public isHappy(n: number): boolean {
        const sums = new Set<number>([n]);

        const calc = (num: number) => {
            let current = num;
            let sum = 0;

            while (current > 0) {
                const digit = current % 10;
                current = Math.floor(current / 10);
                sum += Math.pow(digit, 2);
            }

            return sum;
        }

        let currentSum = n;
        while (currentSum !== 1) {
            currentSum = calc(currentSum);

            if (sums.has(currentSum)) {
                return false;
            }

            sums.add(currentSum);
        }
        
        return true;
    }


}
