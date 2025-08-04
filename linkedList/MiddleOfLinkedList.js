const { CreateNode, MyLinkedList, printList } = require("./DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);

list.addAtTail(7);
list.addAtTail(8);

printList(list);



//importan thing is for slow increment slow
//for fast update fast using fast itslef

function findMddleOfLinkedList(list) {
  let fast = list.head;
  let slow = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;

    //using the fast itlself to increment by 2
    fast = fast?.next?.next;
  }

  return slow.val;
}

console.log("Middle=>", findMddleOfLinkedList(list));
