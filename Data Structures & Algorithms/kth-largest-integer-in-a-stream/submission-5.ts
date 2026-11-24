class KthLargest {
    private _minHeap: MinHeap = new MinHeap();

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    public constructor(private readonly _k: number, nums: number[]) {
        for (let i = 0; i < Math.min(this._k, nums.length); i++) {
            this._minHeap.addItem(nums[i]);
        }

        for (let i = this._k; i < nums.length; i++) {
            const kthLargest = this._minHeap.peakMin();

            if (kthLargest < nums[i]) {
                this._minHeap.removeMin();
                this._minHeap.addItem(nums[i]);
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    public add(val: number): number {
        const kthLargest = this._minHeap.peakMin();

        if (kthLargest > val) {
            return kthLargest;
        }

        if (this._k === this._minHeap.getSize()) {
            this._minHeap.removeMin();
        }
        
        this._minHeap.addItem(val);
        return this._minHeap.peakMin();
    }
}

class MinHeap {
    private _items: number[] = [];

    public getSize(): number {
        return this._items.length;
    }

    public addItem(item: number): void {
        let itemIndex = this._items.push(item) - 1;
        let parentIndex = this.getParentIndex(itemIndex);

        while (itemIndex !== 0 && this._items[itemIndex] < this._items[parentIndex]) {
            this.swap(itemIndex, parentIndex);
            itemIndex = parentIndex;
            parentIndex = this.getParentIndex(itemIndex);
        }
    }

    public peakMin(): number {
         if (this._items.length === 0) {
            return null;
        }

        return this._items[0];
    }

    public removeMin(): number {
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
                if (this._items[rightChildIndex] < this._items[leftChildIndex]) {
                    if (this._items[rightChildIndex] < this._items[itemIndex]) {
                        swapCurrentItem(rightChildIndex);
                        continue;
                    }

                    break;
                }
                
                if (this._items[leftChildIndex] < this._items[itemIndex]) {
                    swapCurrentItem(leftChildIndex);
                    continue;
                }

                break;
            }

            if (this._items[leftChildIndex] < this._items[itemIndex]) {
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
