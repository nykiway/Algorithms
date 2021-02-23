function solve(nums) {
    let count = 0;
    let newArr = nums.slice(0);
    let sorted = newArr.sort((a,b) => a-b);
    for (let i = 0; i < sorted.length; i++) {
        let sortedNum = sorted[i];
        let regNum = nums[i];
        if (sortedNum === regNum) count++;
    }

    return count;
}

console.log([1,7,3,4,10]) // => 2
// only 1 and 10 are in their sorted positions