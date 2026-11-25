class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    public subsets(nums: number[]): number[][] {
        const sets: number[][] = [[]];
        const currentSet: number[] = [];

        const subsetRec = (currentIndex: number): void => {
            currentSet.push(nums[currentIndex]);
            sets.push([...currentSet]);

            for (let i = currentIndex + 1; i < nums.length; i++) {
                subsetRec(i);
            }

            currentSet.pop();
        }

        for (let i = 0; i < nums.length;  i++) {
            subsetRec(i);
        }

        return sets;
    }
}
