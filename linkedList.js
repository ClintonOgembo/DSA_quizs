// Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add node to the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // add node to the beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.head = newNode;
        }
        this.length++;
    }

}

// another marathon;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    unShift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /// WRITE PUSH METHOD HERE ///
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /// WRITE POP METHOD HERE ///
    pop() {
        if (this.length === 0) return undefined;
        let pre = this.head;
        let temp = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;

    }
    /// WRITE SHIFT METHOD HERE ///
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        temp.next = null;
        return temp;

    }
    // GET METHOD.
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    /// WRITE SET METHOD HERE ///
    set(index, value) {
        if (index < 0 || index >= this.length) return false;
        let temp = this.get(index)

        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    /// WRITE INSERT METHOD HERE ///
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);

        const newNode = new Node(value);
        let temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;
        return true;
    }
    /// WRITE REMOVE METHOD HERE ///
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let temp = this.get(index);
        let pre = this.get(index - 1);

        pre = temp.next;
        temp.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }



    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}



let myLinkedList = new LinkedList(4);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();
