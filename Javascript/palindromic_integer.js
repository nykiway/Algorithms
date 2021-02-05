function solve(num) {
        let str = num.toString();
        let mid = Math.floor(str.length / 2);
        let first = str.slice(0, mid);
        let last;
        let revLast = '';
        if (str.length % 2 === 0) {
            last = str.slice(mid);
            revLast = last.split("").reverse().join("");
            if (first === revLast) return true;
        } else {
            last = str.slice(mid + 1);
            revLast = last.split("").reverse().join("");
            if (first === revLast) return true;
        }
        return false;
    }