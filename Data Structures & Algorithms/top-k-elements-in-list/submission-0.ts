class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
                continue;
            }

            map.set(num, 1);
        }

        return [...map.entries()].sort((entry1, entry2) => entry2[1] - entry1[1]).slice(0, k).map(entry => entry[0]);
    }
}
