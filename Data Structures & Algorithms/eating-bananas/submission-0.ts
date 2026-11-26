class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    public minEatingSpeed(piles: number[], h: number): number {
        const maxPile = Math.max(...piles);

        const calcTimeToEat = (rate: number): number => {
            let time = 0;
            for (let pile of piles) {
                time += Math.ceil(pile / rate);
            }
            return time;
        }

        const minEatingSpeedRec = (start: number, end: number): number => {
            if (start > end) {
                return start;
            }

            const mid = Math.floor((start + end) / 2);

            if (calcTimeToEat(mid) > h) {
                return minEatingSpeedRec(mid + 1, end);
            }

            return minEatingSpeedRec(start, mid - 1);
        }

        return minEatingSpeedRec(1, maxPile);
    }
}
