class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    public longestPalindrome(s: string): string {
        const normalizedStr = `#${s.split('').join('#')}#`;

        let maxLength = 0;
        let maxCenter = -1;

        for (let center = 0; center < normalizedStr.length; center++) {
            let counter = 1;
            let right = center + 1;
            let left = center - 1;

            while (
                left >= 0 &&
                right < normalizedStr.length &&
                normalizedStr.charAt(left) === normalizedStr.charAt(right)
            ) {
                right++;
                left--;
                counter += 2;
            }

            if (maxLength < counter) {
                maxLength = counter;
                maxCenter = center;
            }
        }

        return normalizedStr.slice(maxCenter - ((maxLength - 1) / 2), maxCenter - ((maxLength - 1) / 2) + maxLength).replaceAll('#', '');
    }
}
