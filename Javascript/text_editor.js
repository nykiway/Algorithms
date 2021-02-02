function textEditor(s) {
  if (s === "<-") return "";
  let arr = s.split("")
  for(let i = 0; i < arr.length; i++) {
      if ((arr[i] === "<" && arr[i + 1] == "-") && (arr[i -1] !== undefined)) {
          arr.splice(i - 1, 3);
          i -= 2
      } else if ((arr[i] === "<" && arr[i + 1] == "-") && (arr[i-1] === undefined)) {
          console.log("here")
          arr.splice(i, 2);
          i -= 2
      }
  }
return arr.join("");
}