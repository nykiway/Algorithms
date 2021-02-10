// Given a string s, representing a sentence, return whether every letter (case-insensitive) of the alphabet is used at least once.

function solve(s) {
    let hash = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (hash[char] && alphabet.includes(char)) {
            hash[char] += 1;
        } else if (!hash[char] && alphabet.includes(char)){
            hash[char] = 1;
        }
    }
    return Object.keys(hash).length >= 26;
}

// s = "A quick brown fox jumps over the lazy dog" // true
