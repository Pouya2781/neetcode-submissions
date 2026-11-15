class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let checkList = new Array(nums.length + 1).fill(1);

        for (let num of nums) {
            checkList[num] = 0;
        }

        for (let index = 0; index < checkList.length; index++) {
            if (checkList[index] === 1) {
                return index;
            }
        }

        return -1;
    }
}
