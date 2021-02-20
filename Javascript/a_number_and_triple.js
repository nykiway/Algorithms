function solve(nums) {
    if (nums.length === 1) return false;
    for (let i = 0; i < nums.length; i++) {
        let tripled = nums[i] * 3;
        if (nums.includes(tripled) && i !== nums.indexOf(tripled)) {
            return true;
        }
    }

    return false;
}

console.log(solve([2, 3, 10, 7, 6])) // => true;
console.log(solve([3, 4, 5])) // => false;
console.log(solve([0, 2, 0])) // => true;