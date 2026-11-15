class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let oneCount = []
        for (let i = 0; i <= n; i++) {
            oneCount.push(this.count(i));
        }
        return oneCount;
    }

    count(num: number): number {
        let counter = 0;
        while (num !== 0) {
            counter += (num & 1) === 1 ? 1 : 0;
            num = num >> 1;
        }
        return counter;
    }
}
