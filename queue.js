// WRITE NODE CLASS HERE //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    // WRITE QUEUE CONSTRUCTOR HERE //
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    // WRITE ENQUEUE METHOD HERE //
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        let temp = this.last;
        newNode.next = temp;
        this.last = newNode;
        this.length++;
        return this;
    }
    // WRITE DEQUEUE METHOD HERE //
    dequeue() {
        if (!this.first) return undefined;
        let temp = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        this.first = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }



    printQueue() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

}



let myQueue = new Queue(4);

myQueue.getFirst();
myQueue.getLast();
myQueue.getLength();

console.log("\nQueue:");
myQueue.printQueue();
