const { ListNode, printWithHead, MyLinkedList } = require("./DesingLinkedList");
const list_1 = new MyLinkedList();

list_1.addAtTail(9);
list_1.addAtTail(9);
list_1.addAtTail(9);
list_1.addAtTail(9);
list_1.addAtTail(9);
list_1.addAtTail(9);
list_1.addAtTail(9);


const list_2 = new MyLinkedList();
list_2.addAtTail(9);
list_2.addAtTail(9);
list_2.addAtTail(9);
list_2.addAtTail(9);

var addTwoNumbersWorking = function (l1, l2) {
  let carry = 0;
  // to keep reference of the first node/head dummy.next=> first added node
  let dummy=new ListNode(0,null)
  let curr=dummy
 

  while (l1 || l2|| carry) { 
    let a = l1?.val || 0;
    let b = l2?.val || 0;

    let sum = a + b + carry;

    const newNode = sum > 9 ? sum % 10 : sum;

    carry=Math.floor(sum/10)
    console.log("data=>", { carry, a, b, sum,node });
    l1 = l1?.next;
    l2 = l2?.next;
    curr.next=newNode

    
  }


  //dummy.next as the head/first added node

  return dummy.next



};

var addTwoNumbersTried = function (l1, l2) {
  let sum1 = "";
  let sum2 = "";
  let finalSum = 0;

  while (l1) {
    sum1 = l1.val.toString() + sum1;
    l1 = l1.next;
  }
  while (l2) {
    sum2 = l2.val.toString() + sum2;
    l2 = l2.next;
  }

  finalSum = Number(sum1.reverse()) + Number(sum2.reverse());
  //   console.log("finalSum", finalSum);

  return headA;
};
function createList(n) {
  let num = n;
  let sentinal = ListNode(0, null);
  let headNode;

  let prev = sentinal;

  for (let i of num.toString()) {
    let nodeVal = Number(i);
    let node = new ListNode(nodeVal, prev);
    prev = node;
    headNode = node;
  }

  //   console.log("headNode", headNode);

  printWithHead(headNode);
  return headNode;
}

printWithHead(addTwoNumbersWorking(list_1.head, list_2.head))
