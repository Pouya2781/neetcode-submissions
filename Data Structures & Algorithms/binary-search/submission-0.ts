class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    public search(nums: number[], target: number): number {
        const searchRec = (start: number, end: number) => {
            if (start > end) {
                return -1;
            }
            
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] > target) {
                return searchRec(start, mid - 1);
            }

            return searchRec(mid + 1, end);
        }

        return searchRec(0, nums.length);
    }
}
