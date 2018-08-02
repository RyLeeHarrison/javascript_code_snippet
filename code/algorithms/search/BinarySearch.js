 ////// Tree //////////////////
//////////////////////////////
///////// 15 
///////  /   \
////// 10     25
///// / \     / \
//// 7  13   22  27
/// / \     /
// 5   9   17

class Tree {
    add(value) {
        if (this.root) this.root.add(value);
        else this.root = new Node(value);
    }
    has(value) {
        if (this.root) return this.root.has(value);
        else return false;
    }
    delete(value) {
        if (this.root) this.root.delete(value, this, 'root');
    }
    *[Symbol.iterator]() {
        if (this.root) yield* this.root;
    }
}

class Node {
    constructor(value) {
        this.value = value;
    }
    add(value) {
        if (value < this.value) {
            if (this.left) this.left.add(value);
            else this.left = new Node(value);
        } else if (value > this.value) {
            if (this.right) this.right.add(value);
            else this.right = new Node(value);
        }
    }
    has(value) {
        if (value < this.value) {
            if (this.left) return this.left.has(value);
            else return false;
        } else if (value > this.value) {
            if (this.right) return this.right.has(value);
            else return false;
        } else if (value === this.value) {
            return true;
        }
    }
    delete(value, parent, which) {
        if (value < this.value) {
            if (this.left) this.left.delete(value, this, 'left');
        } else if (value > this.value) {
            if (this.right) this.right.delete(value, this, 'right');
        } else if (value === this.value) {
            if (this.left) {
                let node = this.left;
                while (node.right) node = node.right;
                this.value = node.value;
                this.left.delete(this.value, this, 'left');
            } else if (this.right) {
                let node = this.right;
                while (node.left) node = node.left;
                this.value = node.value;
                this.right.delete(this.value, this, 'right');
            } else {
                delete parent[which];
            }
        }
    }
    *[Symbol.iterator]() {
        if (this.left) yield* this.left;
            yield this.value;
        if (this.right) yield* this.right;
    }
}



_iterator

const bst = new Tree();

bst.add(15);
bst.add(25);
bst.add(10);
bst.add(7);
bst.add(22);
bst.add(17);
bst.add(13);
bst.add(5);
bst.add(9);
bst.add(27);

for (let n of bst) {
    console.log(n);
}