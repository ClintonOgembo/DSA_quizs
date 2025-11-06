// WRITE NODE CLASS HERE //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
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
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    /// WRITE UNSHIFT METHOD HERE ///
    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /// WRITE SHIFT METHOD HERE ///
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    /// WRITE GET METHOD HERE ///
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp;

        if (index < this.length / 2) {
            temp = this.head
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    /// WRITE SET METHOD HERE ///
    set(index, value) {
        if (!this.head) return undefined;
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        else return false;
    }
    /// WRITE INSERT METHOD HERE ///
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(value);
            return true;
        }
        if (index === 0) {
            this.unshift(value);
            return true;
        }

        const newNode = new Node(value);
        let temp = this.get(index);
        newNode.next = temp;
        newNode.prev = temp.prev;
        temp.prev = newNode;
        newNode.prev.next = newNode;

        this.length++;
        return true;

    }

}



let myDLL = new DoublyLinkedList(7);

myDLL.getHead();
myDLL.getTail();
myDLL.getLength();

console.log("\nDoubly Linked List:");
myDLL.printList();
