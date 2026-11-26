class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    public combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort();

        const groupedCandidatesMap: Map<number, number> = new Map<number, number>();

        for (let candidate of candidates) {
            if (groupedCandidatesMap.has(candidate)) {
                groupedCandidatesMap.set(candidate, groupedCandidatesMap.get(candidate) + 1);
                continue;
            }

            groupedCandidatesMap.set(candidate, 1);
        }

        const groupedCandidates: number[][] = [...groupedCandidatesMap.entries()];
        const combinations: number[][] = [];
        const currentCombination: number[] = [];
        let currentSum: number = 0;

        const combinationSumRec = (currentGroupIndex: number) => {
            for (let i = 1; i <= groupedCandidates[currentGroupIndex][1]; i++) {
                const currentCandidateValue = groupedCandidates[currentGroupIndex][0];

                currentSum += currentCandidateValue * i;
                currentCombination.push(...new Array(i).fill(currentCandidateValue));

                if (currentSum >= target) {
                    if (currentSum === target) {
                        combinations.push([...currentCombination]);
                    }

                    currentSum -= currentCandidateValue * i;
                    currentCombination.splice(currentCombination.length - i, i);
                    return;
                }
                
                for (let j = currentGroupIndex + 1; j < groupedCandidates.length; j++) {
                    combinationSumRec(j);
                }

                currentSum -= currentCandidateValue * i;
                currentCombination.splice(currentCombination.length - i, i);
            }
        }

        for (let i = 0; i < groupedCandidates.length; i++) {
            combinationSumRec(i);
        }

        return combinations;
    }
}
