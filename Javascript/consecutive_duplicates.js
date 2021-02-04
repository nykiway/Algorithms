// Given a string s, consisting of "X" and "Y"s, delete the minimum number of 
// characters such that there's no consecutive "X" and no consecutive "Y".

function solve(s) {
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1)
            i--
        }
    }

    return arr.join("")
}

console.log(solve('YYYXYXX')) // 'YXYX'