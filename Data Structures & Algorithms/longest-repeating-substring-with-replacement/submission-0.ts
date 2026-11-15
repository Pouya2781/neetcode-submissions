interface CharRepeat {
    char: string;
    repeat: number;
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    public characterReplacement(s: string, k: number): number {
        const charSet = new Set<string>(s.split(''));
        let max = 0;

        for (let targetChar of charSet.keys()) {
            let replacementCount = 0;
            let left = 0;
            let right = 0;

            while (right < s.length) {
                while (replacementCount <= k && right < s.length) {
                    if (s.charAt(right) !== targetChar) {
                        replacementCount++;
                    }

                    right++;
                }

                max = Math.max(max, right - left - (replacementCount > k ? 1 : 0));

                while (replacementCount > k && left < s.length) {
                    if (s.charAt(left) !== targetChar) {
                        replacementCount--;
                    }

                    left++;
                }
            }
        }

        return max;
    }
}
