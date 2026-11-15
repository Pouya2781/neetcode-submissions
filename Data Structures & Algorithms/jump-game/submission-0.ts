class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    public canJump(nums: number[]): boolean {
        let target = nums.length - 1;

        for (let index = nums.length - 2; index >= 0; index--) {
            if (target - index <= nums[index]) {
                target = index;
            }          
        }

        return target === 0;
    }
}
