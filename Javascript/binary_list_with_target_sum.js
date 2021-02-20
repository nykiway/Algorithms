// Solution One:
// Works, but time limit is exceeded - attempt to un-nest loops

function solve(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length + 1; j++) {
          let arr = nums.slice(i, j)
          let sum = arr.reduce((a, b) => a+b);
          if (sum === target) {
              count++;
          }
      }
  }

  return count;
}

// Solution Two: