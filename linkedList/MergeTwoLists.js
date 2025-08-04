var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let dummy = new ListNode();
    let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1?.next;
    } else {
      curr.next = l2;
      l2 = l2?.next;
    }
    curr = curr.next;
  }

  while (l1) {
    curr.next = l1;
    l1 = l1?.next;
    curr = curr.next;
  }
  while (l2) {
    curr.next = l2;
    l2 = l2?.next;
    curr = curr?.next;
  }

  return dummy?.next;
};
