class Uint8ArrayStack extends Uint8Array {
    constructor(max_size) {
        super(max_size);
        this[0] = 255;
        this[1] = 255;
        this[2] = 0x255;
    }
    top() {
        return this[this.byteLength - 1];
    }
}

const safeUint8Array = new Uint8ArrayStack(5);
console.log(safeUint8Array.top())
console.log(safeUint8Array);

class Stack extends Array {
    constructor() {
        super();
    }
    top() {
        return this[this.length - 1];
    }
}

const stack = new Stack();

stack.push('world');
stack.push('hello');

console.log(stack.pop());
console.log(stack.top());
console.log(stack.length);