function moveElementToEnd(array, toMove) {
	let count = 0;
  for (let i = 0; i < array.length; i++) {
		if (array[i] === toMove) {
			count += 1;
			array.splice(i, 1);
			i--;
		}
	}
	
	for (let i = 0; i < count; i++) {
		array.push(toMove);
	}
	
	return array;
}

console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 2));
console.log(moveElementToEnd([1,2,3,3,3,3,1,1,1], 3));
console.log(moveElementToEnd([10, 10, 1, 1, 2, 3, 4, 8], 10));