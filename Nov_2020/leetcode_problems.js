
var missingNumber = function(nums) {
    let allNums = [];
    i = 0;
    while (allNums.length <= nums.length) {
        allNums.push(i);
        i++
    }
    
    for (let i = 0; i < allNums.length; i++) {
        if (!nums.includes(allNums[i])) {
            return allNums[i];
        }
    }
};

// console.log(missingNumber([3,0,1])); // => 2


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


