class MinStack {
    private readonly _stack = [];
    private readonly _minStack = [];

    public constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    public push(val: number): void {
        this._minStack.push(Math.min(this._minStack.at(-1) ?? Infinity, val));
        this._stack.push(val);
    }

    /**
     * @return {void}
     */
    public pop(): void {
        this._minStack.pop();
        this._stack.pop();
    }

    /**
     * @return {number}
     */
    public top(): number {
        return this._stack.at(-1);
    }

    /**
     * @return {number}
     */
    public getMin(): number {
        return this._minStack.at(-1);
    }
}
