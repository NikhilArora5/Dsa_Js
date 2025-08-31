//Approach1 =>convert linked list into an array and then check if array is an plaindrome

//Approach 2 => find the middel reverse the secnod half of ll and then compare first and second half
const {
  CreateNode,
  MyLinkedList,
  printList,
  printReverseList,
} = require("./DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

// list.addAtTail(2);
// list.addAtTail(3);
// list.addAtTail(3);
// list.addAtTail(2);
// list.addAtTail(1);

printList(list);
function isPalindrome(head) {
  // 1 - 2 - 3 - 3 - 2 - 1;

  // 1. next=2 , 3->null ,                prevUpdated=3,slowUpdated=2
  // 2. next=1,prev=3,curr=2, 2->3 ,       prevUpdated=2,slowUpdated=1
  // 3. next=null ,prev=2,   curr=1,  1->2  , prevUpdated=1, next=null

  // at last 1->2, 2->3, 3->null    usually at last we make the prev as head for complete reversal

  // middle 3

  // reversing from 3
  // 1-2-3 1-2-3   now compare  with origin head and the reverse half list

  // code to find middle using slow and fast

  let slow = head;
  let fast = head;
  let firstHalfLast = slow;

  while (fast !== null && fast.next !== null) {
    firstHalfLast = slow;
    slow = slow.next;
    fast = fast?.next?.next;
  }


  // dont do this initiall i went wit this to have bot as it is but in odd case it fails no need of this
// firstHalfLast["next"]=null

  let prev = null;

  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  //
  // now prev is the head of reversed second half list
  // and head is the head of first half list
  // we can compare these two lists now

  //1 -> 2 -> 3 -> 3 -> 2 -> 1; original list
  //3 - 2 - 1 -> null; reversed second half list so we start from prev which is 3 and loop till we reach null
  // very imp as how to compare and use at last after reversal
  //only run till our reversed list does not become null and check if these are equal to the frst hald list
  while (prev) {
    if(prev.val!=head.val){
      return false
    }
    prev = prev?.next;
    head = head?.next;
  }

  

  return true;
}

console.log(isPalindrome(list.head));
