class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charMap = new Map<string, number>();

        for (let charecter of s) {
            if (charMap.has(charecter)) {
                charMap.set(charecter, charMap.get(charecter) + 1);
                continue;
            }
           charMap.set(charecter, 1);
        }

       for (let charecter of t) {
            if (charMap.has(charecter)) {
                 charMap.set(charecter, charMap.get(charecter) - 1);
                if (charMap.get(charecter) === 0) {
                    charMap.delete(charecter);
                }
                continue;
            }
            return false;
        }

        if ([...charMap.keys()].length !== 0) {
            return false;
        }

        return true;
    }
}
