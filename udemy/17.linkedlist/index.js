// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node=null){
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    insertFirst(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node;
        }else{
        
            let temp = this.head;
            node.next = temp;
            this.head = node
    
        }
        return this.head
    }
    size(){
        if(!this.head) return 0;
        let currentNode = this.head;
        let counter = 0

        while(currentNode.next){
            counter++
            currentNode = currentNode.next
        }
        return counter + 1
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head) return null
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode
    }
    clear(){
        this.head = null;
        delete this.head
    }
    removeFirst(){
        //second become first
        let secondNode = this.head.next;
        this.head = secondNode;
    }
    removeLast(){
        // find the 2nd to last node
        if(!this.head) return null;
        if(!this.head.next){
            this.head = null;
            return null;
        } 
        let currentNode = this.head
        let prevNode = null
        while(currentNode.next){
            prevNode = currentNode
            currentNode = currentNode.next
        }
        prevNode.next= null;
        // currentNode = null;
    }
    insertLast(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node;
            return this.head;
        }
        let currentNode = this.head
        while(currentNode.next){
            currentNode= currentNode.next
        }

        currentNode.next = node;
        return node.data;
    }

    getAt(index){


    }
}


const l = new LinkedList();
console.log('l.size',l.size())
// expect(l.size()).toEqual(0);
l.insertFirst(1);//?
l.insertFirst(1);//?
l.insertFirst(1);
l.insertFirst(1);
console.log('l',l)
console.log('l.size',l.size())
// expect(l.size()).toEqual(4);
// l.clear();
// expect(l.size()).toEqual(0);

module.exports = { Node, LinkedList };
