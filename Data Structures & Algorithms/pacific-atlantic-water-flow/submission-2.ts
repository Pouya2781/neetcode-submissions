class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    public pacificAtlantic(heights: number[][]): number[][] {
        const pacificVisited = new Set<string>();
        const atlanticVisited = new Set<string>();

        const dfs = (from: [number, number], visistedSet: Set<string>): void => {
            const stack = [from];

            while (stack.length > 0) {
                const current = stack.pop();
                
                if (visistedSet.has(current.join('-'))) {
                    continue;
                }

                visistedSet.add(current.join('-'));

                if (current[0] > 0 && heights[current[0]][current[1]] <= heights[current[0] - 1][current[1]]) {
                    stack.push([current[0] - 1, current[1]]);
                }

                if (current[0] < heights.length - 1  && heights[current[0]][current[1]] <= heights[current[0] + 1][current[1]]) {
                    stack.push([current[0] + 1, current[1]]);
                }

                if (current[1] > 0 && heights[current[0]][current[1]] <= heights[current[0]][current[1] - 1]) {
                    stack.push([current[0], current[1] - 1]);
                }

                if (current[1] < heights[0].length - 1 && heights[current[0]][current[1]] <= heights[current[0]][current[1] + 1]) {
                    stack.push([current[0], current[1] + 1]);
                }
            }
        }

        for (let i = 0; i < heights[0].length; i++) {
            dfs([0, i], pacificVisited);
        }

        for (let i = 0; i < heights.length; i++) {
            dfs([i, 0], pacificVisited);
        }

        for (let i = 0; i < heights[0].length; i++) {
            dfs([heights.length - 1, i], atlanticVisited);
        }

        for (let i = 0; i < heights.length; i++) {
            dfs([i, heights[0].length - 1], atlanticVisited);
        }


        const canFlowPacificAtlantic = [];
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (pacificVisited.has(`${i}-${j}`) && atlanticVisited.has(`${i}-${j}`)) {
                    canFlowPacificAtlantic.push([i, j]);
                }
            }
        }

        return canFlowPacificAtlantic;
    }
}
