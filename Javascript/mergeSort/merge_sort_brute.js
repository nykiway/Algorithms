let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);

let mergesort = (
  array,
  start = 0,
  end = array.length,
  compare = defaultCompare
) => {
  let length = end - start;
  if (length <= 1) { return array.slice(start, end); }
  
  // Divide
  let pivot = Math.floor(length / 2);
  
  // Conquer
  let left = mergesort(array, start, start + pivot, compare);
  let right = mergesort(array, start + pivot, end, compare);
  
  // Combine
  let sorted = [];
  let i = 0, j = 0;
  for (let k = 0; k < length; k++) {
      if (i < left.length && compare(left[i], right[j]) <= 0) {
          sorted.push(left[i]);
          i++;
      } else {
          sorted.push(right[j]);
          j++;
      }
  }
  
  return sorted;
};

console.log(mergesort([1,3,2,4,5]));
console.log(mergesort([5,4,3,6,7,2,1]))