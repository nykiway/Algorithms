function solve(n) {
  let numStr = n.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
      let num = parseInt(numStr[i]);
      let pow = 1;
      for (let j = 0; j < numStr.length; j++) {
          pow *= num
      }
      sum += pow;
  }

  return sum === n;
}

console.log(solve(153)) // => true 
// 153 = 1 ** 3 + 5 ** 3 + 3 ** 3