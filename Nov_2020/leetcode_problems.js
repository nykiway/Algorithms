
var missingNumber = function(nums) {
    let allNums = [];
    i = 0;
    while (allNums.length <= nums.length) {
        allNums.push(i);
        i++
    }
    
    for (let i = 0; i < allNums.length; i++) {
        if (!nums.includes(allNums[i])) {
            return allNums[i];
        }
    }
};

// console.log(missingNumber([3,0,1])); // => 2


console.log(moveZeroes([0,1,0,3,12]));//[1,3,12,0,0]