function backwardsPrime(start, stop){
  let backwardsPrimes = [];
  
  for (let i = start; i < stop; i++) {
    let str = i.toString();
    let revStr = str.split("").reverse().join("");
    let revNum = Number(revStr);
    if (isPrime(i) && isPrime(revNum)) {
      backwardsPrimes.push(i);
    }
  }
  
  return backwardsPrimes;
}

function isPrime(num) {
  if (num < 2) return false;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}