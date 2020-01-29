class LinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
        this.length = 0
    }

    reverse(){
        // if it's head, make the head's next to be null
        // if not, grab the next node,and make itself the next target node
        let current = this.head
        while(current){
            if(current === this.head){
                current.next = null
            }else{
                let temp = current.next
                temp.next = current
            }
            current = current.next
        }
        console.log('this.head', this.head)
    }

    insertBeforeHead(value){
        let node = new LinkedListNode(value)
        this.length++
        if(this.length === 0){
            this.head = node;
            
            return
        }
        node.next = this.head
        this.head = node;
    }
    toString(){
        const ans = []
        let current = this.head
        // if(!current){
        //     return
        // }
        while(current){
            ans.push(current.value)
            current = current.next
        }
        return ans
    }
}

function ReverseLinkedList(headOfList){
        // if it's head, make the head's next to be null
        // if not, grab the next node,and make itself the next target node
        LinkedList.call(this, headOfList)
        let currentNode = headOfList
        let nextNode = null
        let prevNode = null

       while(currentNode){
           nextNode = currentNode.next
           currentNode.next = prevNode
           prevNode = currentNode
           currentNode = nextNode
       }
       return prevNode
}

const list = new LinkedList(null)
list.insertBeforeHead("Ellen")
list.insertBeforeHead("Paul")
list.insertBeforeHead("John")
list.insertBeforeHead("David")
console.log(list.toString())

console.log(new ReverseLinkedList(list).toString())