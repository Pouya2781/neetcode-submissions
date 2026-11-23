class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    public lastStoneWeight(stones: number[]): number {
        const maxHeap = new MaxHeap();

        for (let stone of stones) {
            maxHeap.addItem(stone);
        }

        while (maxHeap.getSize() > 1) {
            const stone1 = maxHeap.removeMax();
            const stone2 = maxHeap.removeMax();
            const diff = stone1 - stone2;

            if (diff > 0) {
                maxHeap.addItem(diff);
            }
        }

        return maxHeap.getSize() === 0 ? 0 : maxHeap.removeMax();
    }
}

class MaxHeap {
    public _items: number[] = [];

    public getSize(): number {
        return this._items.length;
    }

    public addItem(item: number): void {
        let itemIndex = this._items.push(item) - 1;
        let parentIndex = this.getParentIndex(itemIndex);

        while (itemIndex !== 0 && this._items[itemIndex] > this._items[parentIndex]) {
            this.swap(itemIndex, parentIndex);
            itemIndex = parentIndex;
            parentIndex = this.getParentIndex(itemIndex);
        }
    }

    public removeMax(): number {
        if (this._items.length === 0) {
            return null;
        }

        if (this._items.length === 1) {
            return this._items.pop();
        }

        const removedItem = this._items[0];
        this._items[0] = this._items.pop();

        let itemIndex = 0;
        let leftChildIndex = this.getLeftChildIndex(itemIndex);
        let rightChildIndex = this.getRightChildIndex(itemIndex);

        const updateItemIndex = (index: number): void => {
            itemIndex = index;
            leftChildIndex = this.getLeftChildIndex(itemIndex);
            rightChildIndex = this.getRightChildIndex(itemIndex);
        }

        const swapCurrentItem = (index: number): void => {
            this.swap(itemIndex, index);
            updateItemIndex(index);
        }

        while (this.hasLeftChild(itemIndex)) {
            if (this.hasRightChild(itemIndex))  {
                if (this._items[rightChildIndex] > this._items[leftChildIndex]) {
                    if (this._items[rightChildIndex] > this._items[itemIndex]) {
                        swapCurrentItem(rightChildIndex);
                        continue;
                    }

                    break;
                }
                
                if (this._items[leftChildIndex] > this._items[itemIndex]) {
                    swapCurrentItem(leftChildIndex);
                    continue;
                }

                break;
            }

            if (this._items[leftChildIndex] > this._items[itemIndex]) {
                swapCurrentItem(leftChildIndex);
                continue;
            }

            break;
        }

        return removedItem;
    }

    public getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    public getLeftChildIndex(index: number): number {
        return ((index + 1) * 2) - 1;
    }

    public getRightChildIndex(index: number): number {
        return (index + 1) * 2;
    }

    public hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this._items.length;
    }

    public hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this._items.length;
    }

    public swap(index1: number, index2: number): void {
        const temp = this._items[index1];
        this._items[index1] = this._items[index2];
        this._items[index2] = temp;
    }
}

