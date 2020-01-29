class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

function kthToLastNode(indxFromLast, headNode){
    let currentNode = headNode;
    let nodeToFind = headNode
    let i = 1;
    let length = 0
    while(currentNode){
        currentNode = currentNode.next
        length++
    }
    tailNode = currentNode

    let index = length - indxFromLast //?
    while(i <= index){
        nodeToFind = nodeToFind.next
        i++
    }

    return nodeToFind.value
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log("e",e)

console.log(kthToLastNode(2, a))//?
console.log(kthToLastNode(4, a))//?

