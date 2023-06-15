/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

*/

var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let lastSpacedIndex = trimmedString.lastIndexOf(' ');
    return trimmedString.length - 1 - lastSpacedIndex;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4