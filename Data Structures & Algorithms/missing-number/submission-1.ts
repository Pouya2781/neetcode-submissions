class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const expectedSum = (0 + nums.length + 1) * nums.length / 2;
        let sum = 0;
        for (let num of nums) {
            sum += num;
        }

        return expectedSum - sum;
    }
}
