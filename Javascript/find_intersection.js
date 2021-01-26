function findIntersection(strArr) { 
  let intersection = [];

  let arr1 = strArr[0].split(",");
  let arr2 = strArr[1].split(",");

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection.join(",");
}

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
// Output: 1,4,13

console.log(findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
// Output: 1,9,10
   