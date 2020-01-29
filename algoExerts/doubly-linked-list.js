// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
          if(!this.head){
                  this.head = node;
                  this.tail = node;
                return
          }
  
        this.insertBefore(this.head, node)
    }
  
    setTail(node) {
      // Write your code here.
          node.prev = this.tail;
         this.tail = node;
      }
  
    insertBefore(node, nodeToInsert) {
          if(nodeToInsert === this.head && nodeToInsert===thils.tail) return
          this.remove(nodeToInsert)
         nodeToInsert.prev = node.prev
          nodeToInsert.next = node;
          
          if(node.prev === null){
              this.head = nodeToInsert
          }else{
              node.prev.next = nodeToInsert
          }
          
          node.prev = nodeToInsert
    }
  
    insertAfter(node, nodeToInsert) {
         // Write your code here.
          // If this is the only item
          if(nodeToInsert=== this.head && nodeToInsert === this.tail) return
          
          this.remove(nodeToInsert)

          if(node.next!== null){
              node.next.prev = nodeToInsert
          }else{
              this.tail = nodeToInsert
          }
          node.next = nodeToInsert
              
    }
  
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
          let current = this.head;
          let i = 0;
          while(current){
              if(i === position){
                  nodeToInsert.prev =current.prev
                  nodeToInsert.next=current
                  current = nodeToInsert  				
                  return
              }
              i++
              current = current.next
  
          }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
          let current = this.head
        while(current){
              if(current.value === value){
                  let prevNode = current.prev
                  prevNode.next = current.next
                return 
              }
              current = current.next
          }
    }
  
    remove(node) {
      // Write your code here.
          if(node === this.head) this.head = this.head.next;
          if(node === this.tail) this.tail = this.tail.prev;
          
          this.removeNodeBindings(node)
          
      }
      
      removeNodeBindings(node){
          if(node.prev !==null) node.prev.next = node.next;
          if(node.next !==null) node.next.prev = node.prev;
          node.prev = null;
          node.next = null;
      }
  
    containsNodeWithValue(value) {
      // Write your code here.
          let current = this.head
          while(current){
              if(value === current.value){
                  return true
              }
              current = current.next
          }
          return false
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  
  