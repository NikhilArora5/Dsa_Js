var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    
    // Calculate size and find the original tail 
    // we initalized with size=1 as we will go till we have tail.next so one added initalyy as the loop will run n-1 times and at the end we will have tail which is the last node of the orignal list

    let size = 1;
    let tail = head;
    while (tail.next) {
        size++;
        tail = tail.next;
    }
    
    // IMP CASE TO HANDLE WHEN K > SIZE then remove the reduntant rotations
    k = k % size;
    if (k === 0) return head;
    

    //Now here we iterate using the value k and stop and find the new end node and stop before the rorating node start
    // Find the new tail (size - k - 1 steps from head)
    let newTail = head;
    for (let i = 0; i < size - k - 1; i++) {
        newTail = newTail.next;
    }

    //till here we got the new last node

    //Now we have 1.original head 2.original tail (lastnode) 3.new tail (new end node)
    


//just chnage the next reference and ths lsit will be rotated

    // Perform rotation
    const newHead = newTail.next;
    newTail.next = null;
    tail.next = head;
    
    return newHead;
};