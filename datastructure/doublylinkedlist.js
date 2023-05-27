class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList{
constructor(){
    this.head = null
    this.tail = null
    this.length = 0
}
  // Method to insert a new node at the head of the doubly linked list
insertAtHead(data){
    const newNode = new Node(data)

if(!this.head){
    this.head = newNode
    this.tail = newNode
}else{
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
}
this.length++
return this
}
// Method to insert a new node at the tail of the doubly linked list
insertAtTail(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
else{ 
    newNode.prev = this.tail
    this.tail.next =  newNode
   this.tail =  newNode
}
this.length++
return this
}
 // Method to insert a new node at a specific position in the doubly linked list
 insertAtPosition(data,position){
    if(position === 0 || !this.head){
        this.insertAtHead(data)
        return
    }
    if(position === this.length){
        this.insertAtTail(data)
        return
    }
    const newNode = new Node(data)
    let current = this.head
    let count = 0
    while(count<position){
        current = current.next
        count++
    }
    
 


 }
}