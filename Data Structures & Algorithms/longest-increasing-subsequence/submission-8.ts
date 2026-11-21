class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public lengthOfLIS(nums: number[]): number {
        const memo = new Array(nums.length).fill(0).map(_ => new Array(nums.length + 1).fill(-1));
        nums.push(1001);

        const lisRec = (end : number, lastUsesedIndex: number): number =>  {
            if (end === -1) {
                return 0;
            }

            if (memo[end][lastUsesedIndex] !== -1) {
                return memo[end][lastUsesedIndex];
            }

            const lisWithoutCurrentElement = lisRec(end - 1, lastUsesedIndex);
            const lisWithCurrentElement = nums[end] < nums[lastUsesedIndex] ? lisRec(end - 1, end) + 1 :0;
            const lis = Math.max(lisWithCurrentElement, lisWithoutCurrentElement);

            memo[end][lastUsesedIndex] = lis;
            return lis;
        }

        return lisRec(nums.length - 2, nums.length - 1);
    }
}
