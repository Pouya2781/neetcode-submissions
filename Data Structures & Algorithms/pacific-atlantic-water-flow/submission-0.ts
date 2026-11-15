class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    public pacificAtlantic(heights: number[][]): number[][] {
        const canFlowPacific = new Array(heights.length).fill(0).map((_) => new Array(heights[0].length));
        const canFlowAtlantic = new Array(heights.length).fill(0).map((_) => new Array(heights[0].length));

        let pacificChanged = true;
        while (pacificChanged) {
            pacificChanged = false;

            for (let i = 0; i < heights.length; i++) {
                for (let j = 0; j < heights[0].length; j++) {
                    if (canFlowPacific[i][j]) {
                        continue;
                    }

                    if (
                        i === 0 ||
                        j === 0 ||
                        (canFlowPacific[i - 1][j] && heights[i - 1][j] <= heights[i][j]) ||
                        (canFlowPacific[i][j - 1] && heights[i][j - 1] <= heights[i][j]) ||
                        (i < heights.length - 1 && canFlowPacific[i + 1][j] && heights[i + 1][j] <= heights[i][j]) ||
                        (j < heights[0].length - 1 && canFlowPacific[i][j + 1] && heights[i][j + 1] <= heights[i][j])
                    ) {
                        canFlowPacific[i][j] = true;
                        pacificChanged = true;
                    }
                }
            }
        }

        let atlanticChanged = true;
        while (atlanticChanged) {
            atlanticChanged = false;

            for (let i = 0; i < heights.length; i++) {
                for (let j = 0; j < heights[0].length; j++) {
                    if (canFlowAtlantic[i][j]) {
                        continue;
                    }

                    if (
                        i === heights.length - 1 ||
                        j === heights[0].length - 1 ||
                        (i > 0 && canFlowAtlantic[i - 1][j] && heights[i - 1][j] <= heights[i][j]) ||
                        (j > 0 && canFlowAtlantic[i][j - 1] && heights[i][j - 1] <= heights[i][j]) ||
                        (canFlowAtlantic[i + 1][j] && heights[i + 1][j] <= heights[i][j]) ||
                        (canFlowAtlantic[i][j + 1] && heights[i][j + 1] <= heights[i][j])
                    ) {
                        canFlowAtlantic[i][j] = true;
                        atlanticChanged = true;
                    }
                }
            }
        }


        const canFlowPacificAtlantic = [];
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (canFlowPacific[i][j] && canFlowAtlantic[i][j]) {
                    canFlowPacificAtlantic.push([i, j]);
                }
            }
        }

        return canFlowPacificAtlantic;
    }
}
