// moves all zeroes to end of array;

var moveZeros = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count += 1;
      arr.splice(i, 1);
      i--;
    }
  }
  
  for (let j = 0; j < count; j++) {
    arr.push(0);
  }
  
  return arr;
}