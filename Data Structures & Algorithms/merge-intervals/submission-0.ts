class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    public merge(intervals: number[][]): number[][] {
        intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);

        const normalizedIntervals = [];
        let currentInterval = intervals[0];

        for (let index = 1; index < intervals.length; index++) {
            if (currentInterval[1] < intervals[index][0]) {
                normalizedIntervals.push(currentInterval);
                currentInterval = intervals[index];
                continue;
            }

            currentInterval = [
                Math.min(currentInterval[0], intervals[index][0]),
                Math.max(currentInterval[1], intervals[index][1])
            ];
        }

        normalizedIntervals.push(currentInterval);

        return normalizedIntervals;
    }
}
