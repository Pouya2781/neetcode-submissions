class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[], start: number = 0, end: number = nums.length - 1): number {
        if (start === end) {
            return nums[start];
        }

        const mid = Math.floor((start + end) / 2);

        const max1 = this.maxSubArray(nums, start, mid);
        const max2 = this.maxSubArray(nums, mid + 1, end);

        let rightHalfMax = nums[mid + 1];
        let rightHalfSum = nums[mid + 1];
        for (let i = mid + 2; i <= end; i++) {
            rightHalfSum += nums[i];

            if (rightHalfSum > rightHalfMax) {
                rightHalfMax = rightHalfSum;
            }
        }

        let leftHalfMax = nums[mid];
        let leftHalfSum = nums[mid];
        for (let i = mid - 1; i >= start; i--) {
            leftHalfSum += nums[i];

            if (leftHalfSum > leftHalfMax) {
                leftHalfMax = leftHalfSum;
            }
        }

        const max3 = rightHalfMax + leftHalfMax;

        return Math.max(max1, max2, max3);
    }
}
