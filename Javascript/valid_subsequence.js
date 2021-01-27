function isValidSubsequence(array, sequence) {
	let subSeq = [];
	let i = 0;
	let j = 0;
  while (i < array.length) {
		if (array[i] === sequence[j]) {
			subSeq.push(array[i])
			j++;
		}
		i++;
	}

	return subSeq.length === sequence.length
}

console.log(isValidSubsequence([5 ,1 , 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true