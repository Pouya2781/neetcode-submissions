/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

type IntervalBoundry = {
    boundryType: 'start' | 'end';
    time: number;
}

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    public minMeetingRooms(intervals: Interval[]): number {
        if (intervals.length === 0) {
            return 0;
        }

        const intervalBoundries: IntervalBoundry[] = intervals.flatMap((interval): IntervalBoundry[] => 
            [
                {boundryType: 'start', time: interval.start},
                {boundryType: 'end', time: interval.end}
            ]
        );
        intervalBoundries.sort((intervalBoundry1, intervalBoundry2) => {
            const timeDifferance = intervalBoundry1.time - intervalBoundry2.time;

            if (timeDifferance !== 0) {
                return timeDifferance;
            }

            return intervalBoundry1.boundryType === 'end' ? -1 : 1;
        });

        let counter = 0;
        let max = 0;

        for (let intervalBoundry of intervalBoundries) {
            if (intervalBoundry.boundryType === "start") {
                counter++;
            } else {
                counter--;
            }

            max = Math.max(max, counter);
        }
        
        return max;
    }
}
