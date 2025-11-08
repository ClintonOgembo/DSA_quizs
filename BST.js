// WRITE NODE CLASS HERE //
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    /// WRITE INSERT METHOD HERE ///
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while (true) {
            if (value === temp.value) return undefined;

            if (value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                else temp = temp.left;
            }
            else if (value > temp.value) {
                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                else temp = temp.right;
            }
        }
    }

}



let myBST = new BST();

if (myBST.root === null) {
    console.log("Root: null");
} else {
    console.log("Root:", myBST.root.value);
}
