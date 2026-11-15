class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    public longestConsecutive(nums: number[]): number {
        const visitMap = new Map<number, boolean>();

        for (let num of nums) {
            visitMap.set(num, false);
        }

        let currentSequenceLength = 1;
        let maxSequenceLength = 0;
        for (let num of nums) {
            if (visitMap.get(num)) {
                continue;
            }

            currentSequenceLength = 1;

            let currentNum = num + 1;
            while (visitMap.has(currentNum)) {
                visitMap.set(currentNum, true);
                currentNum++;
                currentSequenceLength++;
            }

            currentNum = num - 1;
            while (visitMap.has(currentNum)) {
                visitMap.set(currentNum, true);
                currentNum--;
                currentSequenceLength++;
            }

            maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
        }

        return maxSequenceLength;
    }
}
