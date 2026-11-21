class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public lengthOfLIS(nums: number[]): number {
        const memo = new Array(nums.length).fill(0).map(_ => new Array(2001).fill(-1));

        const lisRec = (end : number, max: number): number =>  {
            if (end === -1) {
                return 0;
            }

            if (memo[end][max + 1000] !== -1) {
                return memo[end][max + 1000];
            }

            const lisWithoutCurrentElement = lisRec(end - 1, max);
            const lisWithCurrentElement = nums[end] < max ? lisRec(end - 1, nums[end]) + 1 : 0;
            const lis = Math.max(lisWithCurrentElement, lisWithoutCurrentElement);

            memo[end][max + 1000] = lis;
            return lis;
        }

        return lisRec(nums.length - 1, 1000);
    }
}
