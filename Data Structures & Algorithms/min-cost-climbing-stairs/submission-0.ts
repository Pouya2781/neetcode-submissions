class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    public minCostClimbingStairs(cost: number[]): number {
        const memo = new Array(cost.length + 1).fill(-1);

        const climbRec = (end: number): number => {
            if (end < 2) {
                return 0;
            }

            if (memo[end] !== -1) {
                return memo[end];
            }

            memo[end] = Math.min(cost[end - 1] + climbRec(end - 1), cost[end - 2] + climbRec(end - 2))
            return memo[end];
        }

        return climbRec(cost.length);
    }
}
