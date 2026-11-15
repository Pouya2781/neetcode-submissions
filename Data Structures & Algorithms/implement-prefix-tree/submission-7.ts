interface PrefixTreeNode {
    hasValue: boolean;
    children: Map<string, PrefixTreeNode>;
}

class PrefixTree {
    private readonly root: PrefixTreeNode;
    
    public constructor() {
        this.root = {
            hasValue: false,
            children: new Map()
        };
    }

    /**
     * @param {string} word
     * @return {void}
     */
    public insert(word: string): void {
        let current = this.root;
        for (let index = 0; index <= word.length; index++) {
            const char = word.at(index);
            const isLastChar = index === word.length - 1;

            if (current.children.has(char)) {
                if (isLastChar) {
                    current.children.get(char).hasValue = true;
                }
            } else if (isLastChar) {
                current.children.set(char, {
                    hasValue: true,
                    children: new Map()
                });
            } else {
                current.children.set(char, {
                    hasValue: false,
                    children: new Map()
                });
            }

            current = current.children.get(char);
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    public search(word: string): boolean {
        let current = this.root;
        for (let index = 0; index <= word.length; index++) {
            const char = word.at(index);
            const isLastChar = index === word.length - 1;

            if (current.children.has(char)) {
                if (isLastChar) {
                    return current.children.get(char).hasValue;
                }
            } else {
                return false;
            }

            current = current.children.get(char);
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    public startsWith(prefix: string): boolean {
        let current = this.root;
        for (let index = 0; index <= prefix.length; index++) {
            const char = prefix.at(index);
            const isLastChar = index === prefix.length - 1;

            if (current.children.has(char)) {
                if (isLastChar) {
                    return true;
                }
            } else {
                return false;
            }

            current = current.children.get(char);
        }
    }
}
