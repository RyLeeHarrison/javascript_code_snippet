// Adds a value onto the end of the stack

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    // Adds a value onto the end of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    pop() {
        // Check to see if the stack is empty
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Returns the length of the stack
    size() {
        return this.count;
    }
}