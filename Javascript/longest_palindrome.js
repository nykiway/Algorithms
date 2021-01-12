var longestPalindrome = function(str) {
    let longestPali = '';
    
    for (let i = 0; i < str.length; i++) { // cbbd
        let char = str[i]; // c
        let subString = str.slice(0, i); // c, cb, cbb, cbbd
        let reversed = subString.split("").reverse().join("");
        
        if (reversed === subString 
            && subString.length > longestPali.length) {
            longestPali = subString;
        }
    }
    
    return longestPali;
};