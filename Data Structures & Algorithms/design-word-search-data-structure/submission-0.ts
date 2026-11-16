type TrieNode = {
    isFull: boolean;
    children: Map<string, TrieNode>;
}

class WordDictionary {
    private readonly _root: TrieNode;

    public constructor() {
        this._root = {
            isFull: false,
            children: new Map<string, TrieNode>(),
        }
    }

    /**
     * @param {string} word
     * @return {void}
     */
    public addWord(word: string): void {
        let current = this._root;

        for (let index = 0; index < word.length; index++) {
            const targetNode = current.children.get(word.charAt(index));
            if (targetNode != null) {
                current = targetNode;
                continue;
            }

            const newNode: TrieNode = {
                isFull: false,
                children: new Map<string, TrieNode>(),
            }
            current.children.set(word.charAt(index), newNode);
            current = newNode;
        }

        current.isFull = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    public search(word: string): boolean {
        return this.searchRec(word, 0, this._root);
    }

    public searchRec(word: string, start: number, node: TrieNode): boolean {
        if (start === word.length) {
            return node.isFull;
        }

        if (word.charAt(start) === '.') {
            for (let child of node.children.values()) {
                if (this.searchRec(word, start + 1, child)) {
                    return true;
                }
            }

            return false;
        }

        const targetChild = node.children.get(word.charAt(start));
        if (targetChild != null) {
            return this.searchRec(word, start + 1, targetChild);
        }

        return false;
    }
}
