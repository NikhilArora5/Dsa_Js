const {
  CreateNode,
  MyLinkedList,
  printList,
  printReverseList,
  printWithHead,
} = require("../DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

printList(list);


var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};
    

//Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

//Approach-1
//calulate size -size
// use loop to got till the node wher ew eant to del
// formula to reach size-n-1
//asummption ll is not cyclic
var removeNthFromEnd = function (head, n) {
  let size = 0;

  let temp = head;
  if (!head ) return head;

  while (temp) {
    size++;
    temp = temp.next;
  }

   if (size<n) return head;


  let curr = head;
  let prev = null;
  if (size == n) {
    head = head.next;

    return head
  }
  for (let i = 0; i < size - n; i++) {
    console.log("curr==>", curr.val);
    prev = curr;
    curr = curr.next;
  }

  prev["next"] = curr?.next;

  return head;
};

const head = removeNthFromEnd(list.head, 2);

console.log("---------------------")
printWithHead(head);
