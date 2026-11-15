class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
       

        const arr = Array(n + 1);
        arr[1] = 1;
        arr[2] = 2;

        for (let index = 3; index <= n; index++) {
            arr[index] = arr[index - 2] + arr[index - 1];
        }

        return arr[n];
    }
}
