function solve(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push([])
        for (let j = 0; j < matrix[i].length; j++) {
            arr[i].push(matrix[j][i])
        }
    }

    return arr;
}

var m1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(solve(m1)); 