// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor(){
        this.list = []
    }

    add(value){
        this.list.unshift(value)
        return this.list //?
    }

    remove(){
        return this.list.pop() //?
    }
}

const q = new Queue()
q.add(1) //?
q.add(2) //?
q.add(3) //?
q.remove()//?
q.remove()//?

module.exports = Queue;
