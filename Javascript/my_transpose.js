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

console.log([[1,2],[4,5]].transpose()); // [[]]
