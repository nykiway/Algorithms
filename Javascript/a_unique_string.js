// Given a lowercase alphabet string (s), determine whether it has all unique characters.

function aUniqueString(s) {
  let seen = [];
  for (let i = 0; i < s.length; i++) {
      if (!seen.includes(s[i])) {
          seen.push(s[i])
      } else {
          return false;
      }
  }

  return true;
}

console.log(aUniqueString('abcdefg')); // true
console.log(aUniqueString('aaa')) // false