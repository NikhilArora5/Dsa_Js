const {
  CreateNode,
  MyLinkedList,
  ListNode,
  printList,
  printReverseList,
  printWithHead,
} = require("../DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);
list.addAtTail(1);
list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(2);
list.addAtTail(4);
list.addAtTail(4);

printList(list);


//list is sorted
var deleteDuplicates = function (head) {
      if(!head) return head
  let sentNode = new ListNode(null,head);
//   sentNode.next = head;
  let temp = head;
  let curr = head;

  while (temp) {
    if (temp.val != curr.val) {
      curr.next = temp;
      curr = temp;
    }

    temp = temp.next;
  }

  curr.next = null;

  return sentNode.next;
};

const head=deleteDuplicates(list.head)


console.log("---------")
printWithHead(head)