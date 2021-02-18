function solve(nums, target) {
  let sorted = nums.sort((a, b) => a-b);
  let pairs = []

  let i = 0
  let j = sorted.length - 1

  while (i < j) {
      let sum = nums[i] + nums[j]
      if (sum >= target) {
          j -= 1
      } else {
          pairs.push(sum)
          i += 1
      }
  }
    
    return Math.max(...pairs);
  }

  console.log(solve([5, 1, 2, 3], 4)) // => 3
  