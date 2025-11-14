class Heap {
    #heap = [];
    getHeap() {
        return [...this.#heap]
    }

    #leftChild(index) {
        return 2 * parentIndex + 1;
    }
    #rightChild(index) {
        return 2 * parentIndex + 2;
    }
    #parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]]
    }
}