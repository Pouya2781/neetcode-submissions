class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    public combinationSum(nums: number[], target: number): number[][] {
        const dp = new Array(target).fill(null);
        return this.combinationSumCalc(nums, target, dp);
    }

    public combinationSumCalc(nums: number[], target: number, dp: number[][][]): number[][] {
        if (target <= 0) {
            return [];
        }

        if (!!dp[target]) {
            return dp[target];
        }

        dp[target] = this.removeSameArrays(nums.map(num => {
            if (num === target) {
                return [[num]];
            } else if (target > num) {
                return this.combinationSumCalc(nums, target - num, dp).map(arr => [num, ...arr]);
            }

            return [];
        }).flat());
        return dp[target];
    }

    public removeSameArrays(arrays: number[][]): number[][] {
        const set = new Set<string>()

        for (let array of arrays) {
            set.add(array.sort().join(','));
        }

        return [...set].map(entry => entry.split(',').map(char => +char));
    }
}
