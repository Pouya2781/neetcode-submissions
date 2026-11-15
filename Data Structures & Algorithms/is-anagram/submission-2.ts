class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charMap = {}

        for (let charecter of s) {
            if (!!charMap[charecter]) {
                charMap[charecter]++;
                continue;
            }
           charMap[charecter] = 1
        }

        console.log(charMap)

       for (let charecter of t) {
             if (!!charMap[charecter]) {
                charMap[charecter]--;
                continue;
            }
            return false;
        }

         console.log(charMap)

        if (Object.values(charMap).every(value => value === 0)) {
            return true;
        }

        return false;
    }
}
