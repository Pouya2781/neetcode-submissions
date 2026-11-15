class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charMap = new Map<string, number>();

        for (let charecter of s) {
            charMap.set(charecter, (charMap.get(charecter) ?? 0) + 1);
        }

       for (let charecter of t) {
           charMap.set(charecter, (charMap.get(charecter) ?? 0) - 1);
        }

        if ([...charMap.values()].every(value => value === 0)) {
            return true;
        }

        return false;
    }
}
