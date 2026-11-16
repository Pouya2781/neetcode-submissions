class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    public eraseOverlapIntervals(intervals: number[][]): number {
        const memo: number[] = new Array(intervals.length).fill(-1);
        intervals.sort((interval1, interval2) => interval1[1] - interval2[1]);

        const findFirstOverlappingIndex = (targetIndex: number, start: number, end: number): number => {
            if (start > end) {
                return start;
            }

            const mid = Math.floor((start + end) / 2);

            if (intervals[mid][1] <= intervals[targetIndex][0]) {
                return findFirstOverlappingIndex(targetIndex, mid + 1, end);
            }

            return findFirstOverlappingIndex(targetIndex, start, mid - 1);
        }

        memo[0] = 1;
        for (let i = 1; i < intervals.length; i++) {
            const firstOverlappingIndex = findFirstOverlappingIndex(i, 0, i);
            memo[i] = Math.max(
                memo[i - 1],
                ((firstOverlappingIndex - 1 >= 0) ? memo[firstOverlappingIndex - 1] : 0) + 1
            );
        }

        return intervals.length - memo.at(-1);
    }

    public maxIntervalsWithoutOverlap(intervals: number[][], end: number, memo: number[]): number {
        if (end < 0) {
            return 0;
        }

        if (memo[end] !== -1) {
            return memo[end];
        }

        const maxIntervalsWithoutCurrentInterval = this.maxIntervalsWithoutOverlap(intervals, end - 1, memo);

        const findFirstOverlappingIndex = (targetIndex: number, start: number, end: number): number => {
            if (start > end) {
                return start;
            }

            const mid = Math.floor((start + end) / 2);

            if (intervals[mid][1] <= intervals[targetIndex][0]) {
                return findFirstOverlappingIndex(targetIndex, mid + 1, end);
            }

            return findFirstOverlappingIndex(targetIndex, start, mid - 1);
        }

        const firstOverlappingIndex = findFirstOverlappingIndex(end, 0, end);
        const maxIntervalsWithCurrentInterval = this.maxIntervalsWithoutOverlap(intervals, firstOverlappingIndex - 1, memo) + 1;

        return Math.max(maxIntervalsWithoutCurrentInterval, maxIntervalsWithCurrentInterval);
    }
}