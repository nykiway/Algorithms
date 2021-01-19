// Two Sum - returns an array of position pairs where elements sum to zero

Array.prototype.twoSum = function() {
  let sumIndices = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumIndices.push([i, j])
      }
    }
  }

  return sumIndices;
}

// console.log([5,-5].twoSum()); // [[0, 1]]
// console.log([6,0,9,3,-6,0].twoSum()); // [[0,4], [1,5]]
// console.log([1,2,3].twoSum()); // [];

// ---------------------------------------------