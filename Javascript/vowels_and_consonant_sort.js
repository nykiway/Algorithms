 function solve(s) {
        let vowels = 'aeiou';
        let consonants = 'bcdfghjklmnpqrstvwxyz';

        let vowelSent = [];
        let consSent = [];
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (vowels.includes(char)) {
                vowelSent.push(char);
            }
            if (consonants.includes(char)) {
                consSent.push(char);
            }
        }

        let sortedVowSent = vowelSent.sort((a,b) => a.localeCompare(b));
        let sortedConstSent = consSent.sort((a, b) => a.localeCompare(b));
        return sortedVowSent.join("") + sortedConstSent.join("");
    }