
// ---------------------------------------------

Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
    transposed.push([]);
    for (let j = 0; j < this.length; j++) {
      transposed[i].push(this[j][i])
    }
  }

  return transposed;
}

// console.log([[1,2],[4,5]].transpose()); // [[]]

// ---------------------------------------------

// Enumerables: My Each

Array.prototype.myEach = function() {
  let eached = [];

  for (let i = 0; i < this.length; i++) {
    eached.push(this[i]);
  }

  return eached;
}

console.log([1,2,3,4,5].myEach()); // => [1,2,3,4,5]

// ---------------------------------------------

// Enumerables: My Map

Array.prototype.myMap = function() {
}


