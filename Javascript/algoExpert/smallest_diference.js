function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a-b);
	arrayTwo.sort((a, b) => a-b);
	
	let arr = [null, null];
	let min = Infinity;
	let i = 0;
	let j = 0;
	
	while (i < arrayOne.length && j < arrayTwo.length) {
		let num1 = arrayOne[i];
		let num2 = arrayTwo[j]
		let diff = Math.abs(num1 - num2);
		if (diff < min) {
			min = diff;
			arr[0] = num1;
			arr[1] = num2;
		}
		if (arrayOne[i] < arrayTwo[j]) {
			i++
		} else if (arrayOne[i] > arrayTwo[j]) {
			j++
		} else { 
			return arr
		}
	}
	
	return arr;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])) // => [28, 26]