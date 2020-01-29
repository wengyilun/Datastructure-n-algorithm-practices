// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    // first in / first out
    constructor(){
        // first in / last out
        this.stack1= new Stack()
        this.stack2= new Stack()
    }

    add(item){
        this.stack1.push(item) // pushed
        return this.stack1
    }

    peek(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }
        const item = this.stack2.peek()

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }

        return item;
    }

    remove(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }
        
        const popped = this.stack2.pop();

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }

       return popped
    }
}

const q = new Queue();
q.add(1);
q.add(2);//?
q.add(3);//?
q.peek(); //?
q.remove(); //?
q.remove(); //?
q.peek(); //?
q.remove(); //?

module.exports = Queue;
