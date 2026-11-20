class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public maxProduct(nums: number[]): number {
        const maxProductRec = (start: number, end: number): number=> {
            if (start === end) {
                return nums[start];
            }

            const mid = Math.floor((start + end) / 2);

            const leftHalfMax = maxProductRec(start, mid);
            const rightHalfMax = maxProductRec(mid + 1, end);

            let midLeftStartingMostPositive = nums[mid];
            let midLeftStartingMostNegative = nums[mid];
            let product = nums[mid];
            for (let i = mid - 1; i >= start; i--) {
                product *= nums[i];
                midLeftStartingMostPositive = Math.max(midLeftStartingMostPositive, product);
                midLeftStartingMostNegative = Math.min(midLeftStartingMostNegative, product);
            }

            let midRightStartingMostPositive = nums[mid + 1];
            let midRightStartingMostNegative = nums[mid + 1];
            product = nums[mid + 1];
            for (let i = mid + 2; i <= end; i++) {
                product *= nums[i];
                midRightStartingMostPositive = Math.max(midRightStartingMostPositive, product);
                midRightStartingMostNegative = Math.min(midRightStartingMostNegative, product);
            }

            const midCrossingMax = Math.max(
                midLeftStartingMostPositive * midRightStartingMostPositive,
                midLeftStartingMostNegative * midRightStartingMostNegative
            );

            return Math.max(leftHalfMax, rightHalfMax, midCrossingMax);
        }

        return maxProductRec(0, nums.length - 1);
    }
}
