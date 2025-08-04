const {
  CreateNode,
  MyLinkedList,
  printList,
  printReverseList,
} = require("./DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);

printList(list);

function ReverseLinkedList(list) {
  let curr = list.head;
  let prev = null;

  while (curr) {
    // store the reference of next
    const next = curr.next;

    // update the curr refernce to prev start backward linking for reverse
    curr.next = prev;

    //update the prev for next to curr as curr will become prev in next iteration
    prev = curr;

    //use the stored next and move the curr to next

    curr = next;
  }

  //at last just update the lsit head

  list.head = prev;
}

// Not an ideal solution we cant use prev as node of single linked lis thas not prev proerty
function ReverseLinkedListTry(list) {
  let curr = list.head;
  curr.prev = null;
  let prev;

  while (curr.next) {
    prev = curr;
    curr = curr.next;
    curr.prev = prev;
  }

  list.head = curr;
  while (curr.prev) {
    curr.next = curr.prev;
    curr = curr.prev;
  }
  curr.next = null;

  printList(list);

  return;
}

ReverseLinkedList(list);

// printReverseList(list)


