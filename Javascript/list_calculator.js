function solve(nums, op, val) {
        switch(op) {
            case "+":
                return nums.map((num) => num + val);
                break;
            case "-":
                return nums.map((num) => num - val);
                break;
            case "/":
                return nums.map((num) => Math.floor(num / val));
                break;
            case "*":
                return nums.map((num) => num * val);
                break;
            default:
                break;
        }
    }