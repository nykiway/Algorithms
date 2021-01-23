Array.prototype.myEach = function() {
  let eached = [];

  for (let i = 0; i < this.length; i++) {
    eached.push(this[i]);
  }

  return eached;
}

console.log([1,2,3,4,5].myEach()); // => [1,2,3,4,5]
