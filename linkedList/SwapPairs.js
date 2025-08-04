var swapPairs = function (head) {
  //calc size if even loo or we can use curr.next for while will save same purpose
  // do the swap logic only at i=odd start from i=0

  //swap logic

  // create a dummy node

  // nextnode=curr.next
  // curr.next=nextnode.next
  //nextnode.next=curr
  // if we do curr=curr.next it will automatcailly skip the next node

  // but need to use prev
  // keep a refernce of last rotated and then update prev.next to the swaped one

  if (!head || !head.next) return head;

  let curr = head;

  while (curr.next) {
    let nextNode = curr.next;
    curr.next = nextNode.next;
    nextNode.next = curr;
    curr = curr.next;
  }
};
