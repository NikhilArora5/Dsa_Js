// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
const {
  CreateNode,
  MyLinkedList,
  printList,
  printReverseList,
  printWithHead,
} = require("./DesingLinkedList");

const list = new MyLinkedList();

list.addAtTail(1);

list.addAtTail(4);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);

printList(list);
// function to remove elements with value 'val' from the linked list
// using a sentinel node to simplify edge cases
// this approach avoids the need to handle the head separately
// it uses a dummy node that points to the head of the list
// this way we can always return dummy.next as the new head
var removeElements = function(head, val) {
    let sentinel = new ListNode(0, head);
    let current = sentinel;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return sentinel.next;
};
var removeElements = function (head, val) {
  let prev = null;
  let curr = head;

  while (curr) {
    //store next
    const next = curr.next;


    //if value is same 
    // --then check if prev exists as if the first node has the same val then prev will be null in that case
    // --- if the node has prev then link the prev node to the next and remove the curr reference from the list
    // els if no prev means it is at the start of the list update the head

    // if val is not same then store/update the reference for prev and go to next
    if (curr.val == val) {
      if (prev) {
        prev["next"] = next;
      } else {
        head = next;
      }
    } else {
      prev = curr;
    }

    curr = next;
  }


  // at the retun head not curr as we are updating the head
  return head;
};


//DeepSeek version using sentinal node concept
var removeElementsDeepSeek = function(head, val) {
    let dummy = new ListNode(0); // Dummy node to handle edge cases
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next; // Skip the current node
        } else {
            prev = curr; // Only move prev if we didn't delete
        }
        curr = curr.next;
    }
    
    return dummy.next; // Return the modified list 
};

const head = removeElements(list.head, 5);
console.log("-------");
printWithHead(head);
