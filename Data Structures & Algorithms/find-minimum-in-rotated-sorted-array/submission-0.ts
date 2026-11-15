class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[], start: number = 0, end: number = nums.length - 1): number {
        if (start === end) {
            return nums[start];
        }

        if (nums[start] < nums[end]) {
            return nums[start];
        }

        const mid = Math.floor((start + end) / 2);

        if (nums[start] <= nums[mid]) {
            return this.findMin(nums, mid + 1, end);
        }

        return this.findMin(nums, start, mid);
    }
}
