function reverseLinkedList(head) {
	let reversedPointer = null;
	let oldPointer = head;
	let nextPointer = head.next;
	while (oldPointer !== null) {
		nextPointer = oldPointer.next;
		oldPointer.next = reversedPointer;
		reversedPointer = oldPointer;
		oldPointer = nextPointer;
	}
	
	return reversedPointer;
}