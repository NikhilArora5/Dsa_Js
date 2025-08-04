function CreateNode(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new CreateNode(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size = this.size + 1;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let current = this.head;
  const newNode = new CreateNode(val);

  if (current == null) {
    this.head = newNode;
  } else {
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.size < index && index > 0) return;

  if (index == 0) {
    this.addAtHead(val);
  } else if (index == this.size) {
    this.addAtTail(val);
  } else {
    const newNode = new CreateNode(val);
    let curr = this.head;
    let i = 0;

    while (i < index - 1 && curr.next) {
      // to get the already exisitng node at that index
      curr = curr.next;
      i++;
    }

    //After the loop curr is the Node where we need to add newNode

    //so first we link the newNode next to curr.next
    newNode.next = curr.next;

    //after linking newNode next to next node we make the curr (exisitng value at index) next to newNode
    curr.next = newNode;
  }

  this.size++;
};



MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    // Delete head
    this.head = this.head.next;
  } else {
    let curr = this.head;
    let i = 0;

    // Traverse to the node before the one we want to delete
    while (i < index - 1) {
      curr = curr.next;
      i++;
    }

    // Skip the node to delete
    curr.next = curr.next ? curr.next.next : null;
  }

  this.size--;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  let i = 0;

  if (index == 0) {
    return curr.val;
  } else {
    while (i <= index - 1) {
      // to get the already exisitng node at that index
      curr = curr.next;
      i++;
    }

    return curr.val;
  }
};
MyLinkedList.prototype.ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

const list = new MyLinkedList();

const node1 = new CreateNode(1);
const node2 = new CreateNode(2);
const node3 = new CreateNode(3);

node1.next = node2;
node2.next = node3;

list.head = node1;
list.size = 3;

list.addAtTail(4);
let current = list.head;
list.addAtIndex(3, 9);
list.deleteAtIndex(1);
list.deleteAtIndex(10);
list.deleteAtIndex(4);

const printList = (list) => {
  let current = list.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

const printWithHead = (current) => {
  console.log("--printWithHead----")
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

const printReverseList = (list) => {
  let current = list.head;
  while (current.next) {
    current = current.next;
  }

  while (current.prev) {
    current = current.prev;
    console.log(current.prev);
  }

  return;
};

// console.log("list.get(1)", list.get(6));

module.exports = {
  MyLinkedList,
  CreateNode,
  printList,
  printReverseList,
  printWithHead,
  ListNode
};
