class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    public evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (let token of tokens) {
            switch (token) {
                case '+': {
                    stack.push(stack.pop() + stack.pop());
                    break;
                }
                case '*': {
                    stack.push(stack.pop() * stack.pop());
                    break;
                }
                case '-': {
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first - second);
                    break;
                }
                case '/': {
                    const second = stack.pop();
                    const first = stack.pop();
                    const result = first / second;
                    stack.push(Math.sign(result) * Math.floor(Math.abs(result)));
                    break;
                }
                default: {
                    stack.push(+token);
                    break;   
                }
            }
        }

        return stack.pop();
    }
}
