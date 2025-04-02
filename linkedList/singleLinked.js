class Node {
  constructor(value, index) {
    this.next = null;
    this.value = value;
    this.index=index;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  addFirst(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

      return;
    }

    const cuurentFirst = this.head;
    this.head = newNode;
    newNode.next = cuurentFirst;
  }

  addSpecificIndex(value, index) {
    const newNode = new Node(value,index);
    if (!this.head) {
      this.head = newNode;

      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (count != index && count <index) {
        console.log("count",count,index)
      if (current.next) {
        current = current.next;
        this.prev = current;
      }

      count += 1;
    }

    if (count === index) {
        prev.next = newNode;
        newNode.next = current;
      } else {
        console.error("Index out of bounds");
      }
  }

  printList() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current?.value} -> `);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.addFirst(5);
list.addSpecificIndex(8, 1);
list.printList();

// class Node {
//     constructor(value) {
//       this.value = value;  // Data
//       this.next = null;    // Pointer to next node
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;  // Head of the list
//     }

//     // Append a node at the end
//     append(value) {
//       const newNode = new Node(value);
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }

//       let current = this.head;
//       while (current.next) {
//         current = current.next;  // Move to the next node
//       }
//       current.next = newNode;
//     }

//     // Print the linked list
//     printList() {
//       let current = this.head;
//       while (current) {
//         process.stdout.write(`${current.value} -> `);
//         current = current.next;
//       }
//       console.log("null");
//     }
//   }

//   // Usage Example
//   const list = new LinkedList();
//   list.append(10);
//   list.append(20);
//   list.append(30);
//   list.printList(); // Output: 10 -> 20 -> 30 -> null
