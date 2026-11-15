class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let index = 0; index < nums.length; index++) {
            if (map.get(target - nums[index]) == null) {
                map.set(nums[index], index);
                continue;
            }


            return [map.get(target - nums[index]), index]
        }
    }
}
