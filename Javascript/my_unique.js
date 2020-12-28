// Unique Element in Array

Array.prototype.unique = function() {
  let unique = [];

  for (let i = 0; i < this.length; i++) {
    if (!unique.includes(this[i])) {
      unique.push(this[i]);
    }
  }

  return unique;
}

// console.log([1,1,1,2,2,3,4,5,6].unique()); // [1,2,3,4,5,6]
// console.log([3,3,4,2,1].unique()); // [3,4,2,1]
