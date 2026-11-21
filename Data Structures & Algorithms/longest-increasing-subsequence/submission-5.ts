class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public lengthOfLIS(nums: number[]): number {
        const memo = new Array(nums.length).fill(0).map(_ => new Array(nums.length + 1).fill(-1));

        const lisRec = (end : number, lastUsesedIndex: number): number =>  {
            if (end === -1) {
                return 0;
            }

            if (memo[end][lastUsesedIndex + 1] !== -1) {
                return memo[end][lastUsesedIndex + 1];
            }

            const lisWithoutCurrentElement = lisRec(end - 1, lastUsesedIndex);
            const lisWithCurrentElement = lastUsesedIndex === -1 || nums[end] < nums[lastUsesedIndex] ?
                                                lisRec(end - 1, end) + 1 :0;
            const lis = Math.max(lisWithCurrentElement, lisWithoutCurrentElement);

            memo[end][lastUsesedIndex + 1] = lis;
            return lis;
        }

        return lisRec(nums.length - 1, -1);
    }
}
