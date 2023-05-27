class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }
  //////////// Method to insert a new node at the head of the linked list
  insertAtHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  ////////////Method to insert a new node at the end of the linked list
  insertAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Method to insert a new node at a specific position in the linked list

  insertAtPosition(value, position) {
    if (position === 0 || !this.head) {
      this.insertAtHead(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let count = 1;
    while (current && count < position) {
      current = current.next;
      count++;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      //if position exceeds the length
      this.insertAtTail(value);
    }
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  display() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.value + "->";
      current = current.next;
    }
    console.log(this.head)
    list += "Null";
    console.log(list);
  }
  deleteNode(value){
    if(!this.head) return
    // Handle deletion if the node to be deleted is the head
    if(this.head.value === value){
      this.head = head.next
    }

  }
}

const linkedlist1 = new LinkedList();

console.log(linkedlist1.insertAtHead(5));
console.log(linkedlist1.insertAtTail(8));
console.log(linkedlist1.insertAtTail(33));
console.log(linkedlist1.insertAtPosition(77, 2));
linkedlist1.display();
