class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let start = 0
        const map = new Map<string, number>();

        for (let index = 0; index < s.length; index++) {
            if (map.has(s[index])) {
                let newStart = map.get(s[index]) + 1;

                max = Math.max(index - start, max);

                for (let i = start; i < newStart; i++) {
                    map.delete(s[i]);
                }

                map.set(s[index], index);
                start = newStart;

                continue;
            }

            map.set(s[index], index);
        }

        max = Math.max(s.length - start, max);

        return max;
    }
}
