class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    
    enqueue() { 
        const value = this.queue[0];
        this.queue.splice(0, 1);
        
        return value;
    }

    // Remove and return next in queue
    dequeue() { 
        const value = this.queue[0];
        this.queue.splice(0, 1);
        
        return value;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const queue = new Queue(array)

console.log(queue.dequeue()) // 1
console.log(queue.dequeue()) // 2

console.log(queue) // => [3, 4, 5, 6, 7, 8, 9, 10]
