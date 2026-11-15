class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    public threeSum(nums: number[]): number[][] {
        const threeSumSets = [];
        const map = new Map<number, number[]>;
        const twoSetMap = new Map<number, number[][]>;
        const existanceSet = new Set<string>();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.get(nums[i]).push(i);
            }

            map.set(nums[i], [i]);
        }

        for (let i = 0; i < nums.length; i++) {
            const twoSumSets = twoSetMap.has(0 - nums[i]) ? twoSetMap.get(0 - nums[i]) : this.twoSum(nums, 0 - nums[i]);
            
            twoSetMap.set(0 - nums[i], twoSumSets);

            twoSumSets.filter(set => !set.includes(i)).forEach(set => {
                const sortedTriplet = [nums[i], ...set.map(index => nums[index])];
                sortedTriplet.sort();
                const sortedTripletSerialized = sortedTriplet.join('/');
                if (!existanceSet.has(sortedTripletSerialized)) {
                    threeSumSets.push(sortedTriplet);
                    existanceSet.add(sortedTripletSerialized);
                }
            });
        }

        return threeSumSets;
    }

    public twoSum(nums: number[], target: number): number[][] {
        const twoSumSets = [];
        const map = new Map<number, number[]>;
        const visited = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.get(nums[i]).push(i);
            }

            map.set(nums[i], [i]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.has(target - nums[i])) {
                continue;
            }

            visited.add(nums[i]);
            map.get(target - nums[i])?.filter(index => index !== i).forEach(index => twoSumSets.push([i, index]));
        }

        return twoSumSets;
    }
}
