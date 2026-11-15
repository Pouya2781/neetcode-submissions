class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    public encode(strs: string[]): string {
        console.log(strs.map(str => str.replaceAll('s', 'ss').replaceAll(',', 's,') + ',').join(''));
        return strs.map(str => str.replaceAll('s', 'ss').replaceAll(',', 's,') + ',').join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    public decode(str: string): string[] {
        const strs = [];
        let currentWord = '';
        let scaped = false;

        for (let char of str) {
            if (char === ',') {
                if (scaped) {
                    currentWord = currentWord.slice(0, currentWord.length - 1);
                    currentWord += ',';
                    scaped = false;
                    continue;
                }

                strs.push(currentWord);
                currentWord = '';
                continue;
            }

            if (char === 's' && scaped) {
                scaped = false;
                continue;
            }

            scaped = false;

            currentWord += char;

            if (char === 's') {
                scaped = true;
            }
        }

        return strs;
    }
}
