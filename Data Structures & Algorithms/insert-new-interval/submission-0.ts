class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    public insert(intervals: number[][], newInterval: number[]): number[][] {
        const newIntervals = [];
        let start = newInterval[0];
        let end = newInterval[1];
        let added = false;

        for (let i = 0; i < intervals.length; i++) {
            if (intervals[i][1] < newInterval[0]) {
                newIntervals.push(intervals[i]);
                continue;
            }

            if (intervals[i][0] > newInterval[1]) {
                if (!added) {
                    newIntervals.push([start, end])
                    added = true;
                }

                newIntervals.push(intervals[i]);
                continue;
            }

            start = Math.min(start, newInterval[0], intervals[i][0]);
            end = Math.max(end, newInterval[1], intervals[i][1]);
        }

         if (!added) {
            newIntervals.push([start, end])
        }

        return newIntervals;
    }
}
