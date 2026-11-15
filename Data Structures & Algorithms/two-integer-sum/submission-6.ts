class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {};

        for (let index = 0; index < nums.length; index++) {
            if (map[target - nums[index]] == null) {
                map[nums[index]] = index;
                continue;
            }


            return [map[target - nums[index]], index]
        }
    }

    public binarySearch(nums: number[], target: number): number {
        if (nums.length === 0) {
            return -1;
        }

        const mid = Math.floor(nums.length / 2);

        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] > target) {
            return this.binarySearch(nums.slice(0, mid), target);
        }

        return this.binarySearch(nums.slice(mid + 1, nums.length), target); 
    }
}
