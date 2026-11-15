class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (let char of s) {
            if (char === '(') {
                stack.push('(');
                continue;
            }

            if (char === '{') {
                stack.push('{');
                continue;
            }

            if (char === '[') {
                stack.push('[');
                continue;
            }

            const prantesis = stack.pop();

            if (char === ')' && prantesis === '(') {
                continue;
            }

            if (char === '}' && prantesis === '{') {
                continue;
            }

            if (char === ']' && prantesis === '[') {
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
