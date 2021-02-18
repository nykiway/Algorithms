function threeNumberSum(array, targetSum) {
  let sorted = array.sort((a,b) => a-b);
	let result = [];
	
	for (let i = 0; i < sorted.length; i++) {
		let j = i + 1;
		let k = sorted.length - 1;
		while (j < k) {
			let sum = sorted[i] + sorted[j] + sorted[k];
			if (sum === targetSum) {
				result.push([sorted[i], sorted[j], sorted[k]])
				j++
			} else if (sum > targetSum) {
				k--
			} else {
				j++
			}
		}
	}
	
	return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) 
//=> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] 
