class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public jump(nums: number[]): number {
        if (nums.length === 1) {
            return 0;
        }

        let jumpCount = 0;
        let left = 0;
        let right = 0;

        while (true) {
            let maxInReach = -Infinity;
           
            for (let i = left; i <= right; i++) {
                if (nums[i] + i >= nums.length - 1) {
                    return jumpCount + 1;
                }

                maxInReach = Math.max(maxInReach, nums[i] + i);
            }

            left = right + 1;
            right = maxInReach;
            jumpCount++;
        }
    }
}
