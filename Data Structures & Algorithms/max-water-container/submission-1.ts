class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    public maxArea(heights: number[]): number {
        let max = 0;
        let start = 0;
        let end = heights.length - 1;

        while (start < end) {
            max = Math.max(max, Math.min(heights[start], heights[end]) * (end - start));

            if (heights[start] > heights[end]) {
                end--;
            } else {
                start++;
            }
        }

        return max;
    }
}
