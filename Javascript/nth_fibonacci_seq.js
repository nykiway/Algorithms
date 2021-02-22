// Iterative

function solve(n) {
    if (n === 1) return 1;
    if (n === 0 ) return 0;

    let fibs = [0, 1];
    while (fibs.length <= n) {
        let nextNum = fibs[fibs.length -1] + fibs[fibs.length -2]
        fibs.push(nextNum);
    }

    return fibs[fibs.length -1]
}