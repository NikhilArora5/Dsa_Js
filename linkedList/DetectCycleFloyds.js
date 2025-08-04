if(!head || !head?.next){
        return false
    }
    
   let slow = head;
   //to avoid equal case on first
  let fast = head.next;

  while (fast?.next !== null && fast !== null) {
    if (slow.next == fast.next) return true;
    slow = slow.next;
    fast = fast?.next?.next;
  }

  return false;
