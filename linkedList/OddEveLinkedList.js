const {
  CreateNode,
  MyLinkedList,
  printList,
  printReverseList,
  printWithHead,
  ListNode,
} = require("./DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

// printList(list);


//w
var oddEvenListPassed = function(head) {
    if (!head || !head.next) return head;
    
    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    return head;
};
var oddEvenList = function (head) {
  // 1->2->3->4->5

  //   size=2
  // evenIndices.next = curr;=1->3
  // prev.next = curr.next; 2->4
  // evenIndices = evenIndices.next; now evenIndices=3

  // evenIndices.next = prev;  3->2 =     1->3->2->4-5

  //At size=3 curr=4 before change prev=3
  //curr=5 , prev=4

  // at size=4  ,curr=5 , prev=4 ,evenIndices =3 before change

  //i=0 nothing

  //1-3-2-4-5-6-7 after i=2

  // i=3 1-3-5-2-4-6-7

  //output => 1->3->5->2->4->6

  //Approach-1 use the logic of remove duplicate like this is jsut for referencing a concept

  let curr = head.next;
  let evenIndices = head;
  let sentinal = new ListNode(0, head);
  let size = 1;
  let prev = sentinal;

  while (curr) {
    // if (size == 0) {
    //     size++;
    //   continue;
    // }
     console.log("index", size);
    console.log("curr", curr);
     const tempCurr=curr
    if (size % 2 == 0) {
      console.log("-----swap case----");
     
      evenIndices.next = curr;
      prev["next"] = curr?.next;

      evenIndices = evenIndices.next;
      curr.next = prev;

      console.log("---changes---EFFECT")
       printWithHead(head);

    }
    prev = curr;
    curr = tempCurr.next;
   
    printWithHead(head);
    size++;
  }

  return head;
};

const head = oddEvenList(list.head);

// printWithHead(head);
