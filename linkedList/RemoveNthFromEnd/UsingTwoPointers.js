var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let fast = sentinel;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    let slow = sentinel;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return sentinel.next;
};