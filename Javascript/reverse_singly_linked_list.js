var reverseList = function(head) {
  // since a node does not carry a reference to it's previous node, you must store it's prev
  // element before hand:
  let prev = null;
  // You also need another pointer to store the next node before changing the reference: 
  let curr = head;
  while (curr !== null) {
    // while traversing list, change current node's next pointer to point at previous element.
    nextTemp = curr.next; 
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  //  returning the head reference at the end will return entire linked list reversed
  return prev;
}


