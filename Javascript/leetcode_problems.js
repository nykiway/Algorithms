


console.log(moveZeroes([0,1,0,3,12]));//[1,3,12,0,0]


// RUNSUM

var runningSum = function(nums) {
    let runSum = [];
    let sum = 0;
    i = 0;
    while (runSum.length < nums.length) {
        sum += nums[i]
        runSum.push(sum)
        i++
    }
    
    return runSum;
}

console.log(runningSum([1,2,3,4])); // [1,3,6,10]

// RUN LENGTH ENCODING

function runLengthEncoding(str) {
  let encodedChars = [];
	let currentRun = 1;
	for (let i = 1; i < str.length; i++) {
		let currentChar = str[i];
		let prevChar = str[i - 1];
		
		if ((currentChar !== prevChar) || currentRun === 9) {
			encodedChars.push(currentRun.toString());
			encodedChars.push(prevChar);
			currentRun = 0;
		}
		currentRun += 1;
	}
	
	encodedChars.push(currentRun.toString());
	encodedChars.push(str[str.length - 1]);
	return encodedChars.join("")
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")); // 9A4A2B3C4D

// SELECTION SORT

function selectionSort(array) {
	let startIdx = 0;
	while (startIdx < array.length -1) {
		let smallestIdx = startIdx;
		for (let i = startIdx + 1; i < array.length; i++) {
			if (array[smallestIdx] > array[i]) smallestIdx = i;
		}
		swap(startIdx, smallestIdx, array);
		startIdx ++;
	}
	
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

console.log(selectionSort([1,5,2,7,9])) // ==> [1,2,5,7,9]


