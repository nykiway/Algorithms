let mergesortArraySplit = (
  array, 
  compare = defaultCompare
) => {
  if (array.length <=1) { return array };

  let pivot = Math.floor(array.length / 2);

  let left = mergeSortArraySplit(array.slice(0, pivot), compare);
  let right = mergeSortArraySplit(array.slice(pivot, array.length), compare);

  let sorted = [];
  let i = 0, j = 0;
  for (let k = 0; k < array.length; k++) {
    if (i < left.length && compare(left[i], right[j]) <= 0 ) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};