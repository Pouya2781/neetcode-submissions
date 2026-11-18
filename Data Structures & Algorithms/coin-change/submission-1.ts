class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    public coinChange(coins: number[], amount: number): number {
        const memo = new Array(coins.length).fill(0).map(_ => new Array(amount + 1).fill(-2));

        for (let i = 0; i < coins.length; i++) {
            memo[i][0] = 0;
        }

        const coinChange = (end: number, amount: number): number => {
            if (amount < 0 || end < 0) {
                return -1;
            }

            if (memo[end][amount] !== -2) {
                return memo[end][amount];
            }

            const withCurrentCoin = coinChange(end, amount - coins[end]);
            const withoutCurrentCoin = coinChange(end - 1, amount);
            let minCoinCount = -1;

            if (withCurrentCoin !== -1 && withoutCurrentCoin !== -1) {
                minCoinCount = Math.min(withCurrentCoin + 1, withoutCurrentCoin);
            } else if (withoutCurrentCoin !== -1) {
                minCoinCount = withoutCurrentCoin;
            } else if (withCurrentCoin !== -1) {
                minCoinCount = withCurrentCoin + 1;
            }

            memo[end][amount] = minCoinCount;
            return minCoinCount;
        }

        return coinChange(coins.length - 1, amount);
    }
}
