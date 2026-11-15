class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    public productExceptSelf(nums: number[]): number[] {
        let pref = new Array(nums.length).fill(1);
        let suff = new Array(nums.length).fill(1);

        let product = 1;
        for (let index = 0; index < nums.length; index++) {
            pref[index] = product;
            product *= nums[index];
        }

        product = 1;
        for (let index = nums.length - 1; index >= 0; index--) {
            suff[index] = product;
            product *= nums[index];
        }

        let products = new Array(nums.length).fill(0);
        for (let index = 0; index < nums.length; index++) {
            products[index] = pref[index] * suff[index];
        }

        return products;
    }
}
