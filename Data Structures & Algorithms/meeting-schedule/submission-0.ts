/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals.sort((interval1, interval2) => interval1.end - interval2.end);
        
        for (let index = 1; index < intervals.length; index++) {
            if (intervals[index].start < intervals[index - 1].end) {
                return false;
            }
        }

        return true;
    }
}
