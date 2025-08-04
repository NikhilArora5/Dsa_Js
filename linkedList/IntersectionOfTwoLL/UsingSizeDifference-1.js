//given that LL's are not cyclic

const doesLinkedListsIntersect = (headA, headB) => {
  //calculate size of both as they are not cyclic so use simple whil to calcualate

 let sizeA = 0;
  let sizeB = 0;
  let tempHeadA=headA
  let tempHeadB=headB

  while (tempHeadA) {
    sizeA++;
    tempHeadA=tempHeadA.next
  }

  while (tempHeadB) {
    sizeB++;
    tempHeadB=tempHeadB.next
  }



  let diff = Math.abs(sizeA - sizeB);
  let greaterSizeHead;
if (sizeA > sizeB) {
      greaterSizeHead = headA;
    } else {
      greaterSizeHead = headB;
    }
  
  //After this both lls head are on the same level
  while ( diff) {
    greaterSizeHead = greaterSizeHead?.next;
    diff=diff-1
  }

  if (sizeA - sizeB > 0) {
    headA = greaterSizeHead;
  } else {
    headB = greaterSizeHead;
  }

console.log("headA && headB",headA , headB)
  while (headA && headB) {
    if ((headA == headB && headA.next == headB.next)) {
        return headA
    }
    headA=headA.next
    headB=headB.next
  }

  return null
};
