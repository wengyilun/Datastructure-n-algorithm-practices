// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data){
        // at root node
        
        if(data < this.data && this.left){
            this.left.insert(data)
        }else if(data < this.data){
            this.left = new Node(data)
        }else if(data >= this.data && this.right){
            this.left.insert(data)
        }else if(data >= this.data){
            this.left = new Node(data)
        }
    }
    constains(data){
        if(this.data === data){
            return this
        }
        if(this.data > data && this.left){
            this.left.constains(data)
        }else if(this.data < data && this.right){
            this.right.contains(data)
        }
        return null
    }

}

const root = new Node(10)
root.insert(-20)

module.exports = Node;
