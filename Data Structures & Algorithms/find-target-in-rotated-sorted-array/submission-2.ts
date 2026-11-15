class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    public search(nums: number[], target: number): number {
        const arrayStartIndex = this.findMinIndex(nums);
        return this.rotatedSearch(nums, target, 0, nums.length - 1, arrayStartIndex);
    }

    public rotatedSearch(nums: number[], target: number, start: number, end: number, arrayStartIndex: number): number {
        if (start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);
        const midMappedIndex = this.mapIndex(mid, arrayStartIndex, nums.length);

        if (nums[midMappedIndex] === target) {
            return midMappedIndex;
        }

        if (nums[midMappedIndex] > target) {
            return this.rotatedSearch(nums, target, start, mid - 1, arrayStartIndex);
        }

        return this.rotatedSearch(nums, target, mid + 1, end, arrayStartIndex);
    }

    public mapIndex(index: number, arrayStartIndex: number, length: number): number {
        return (arrayStartIndex + index) % length;
    }

    public findMinIndex(nums: number[], start: number = 0, end: number = nums.length - 1): number {
        if (start === end) {
            return start;
        }

        if (nums[start] < nums[end]) {
            return start;
        }

        const mid = Math.floor((start + end) / 2);

        if (nums[start] <= nums[mid]) {
            return this.findMinIndex(nums, mid + 1, end);
        }

        return this.findMinIndex(nums, start, mid);
    }
}
