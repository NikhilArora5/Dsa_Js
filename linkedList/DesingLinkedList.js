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

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  this.size = this.size + 1;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new CreateNode(val);
  let prev;
  let curr = this.head;
  let i=0
  while (i <= index-1 && curr.next) {

    if (i == index - 2) {
        prev=curr.next
    }
     
    curr = curr.next;
    i++
  }
  console.log({
    curr,prev
  })

  prev.next=newNode
  newNode.next=curr
};

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
list.addAtIndex(3,9)
while (current) {
  console.log(current.val);
  current = current.next;
}
