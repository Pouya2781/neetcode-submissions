class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            if (buy > prices[i]) {
                buy = prices[i];
                continue;
            }

            if (maxProfit < prices[i] - buy) {
                maxProfit = prices[i] - buy;
            }
        }

        return maxProfit;
    }
}
