class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.top = null;
        this.length = 0;
    }

    /// WRITE PUSH METHOD HERE ///
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
    /// WRITE POP METHOD HERE ///
    pop() {
        if (!this.top) return undefined;
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

}



let myStack = new Stack(2);

console.log("Before push():");
console.log("--------------");
myStack.getTop();
myStack.getLength();

console.log("\nStack:");
myStack.printStack();

myStack.push(1);

console.log("\n\nAfter push():");
console.log("-------------");
myStack.getTop();
myStack.getLength();

console.log("\nStack:");
myStack.printStack();

