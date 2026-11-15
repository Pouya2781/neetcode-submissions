class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    public productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;
        const products = new Array(nums.length).fill(nums.reduce((acc, num) => {
            if (num === 0) {
                zeroCount++;
                return acc;
            }
            return acc * num;
        }, 1));
        return products.map((product, index) => {
            if (zeroCount === 0) {
                return product / nums[index];
            }

            if (zeroCount === 1) {
                if (nums[index] === 0) {
                    return product;
                }
                return 0;
            }

            return 0;
        });
    }
}
