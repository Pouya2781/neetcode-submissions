class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let str of strs) {
            const normalizedStr = this.normalize(str);
            if (map.has(normalizedStr)) {
                map.get(normalizedStr).push(str);
                continue;
            }

            map.set(normalizedStr, [str]);
        }

        return [...map.values()];
    }

    normalize(str: string): string {
        return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    }
}
