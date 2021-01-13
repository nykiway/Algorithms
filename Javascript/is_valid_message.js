function isAValidMessage(message){
  let separated = message.split(/([0-9]+)/);
  
  for (let i = 0; i < separated.length; i++) {
    let curr = separated[i];
    let next = separated[i + 1];
    
    if (Number(curr) && next.length !== Number(curr)) {
      return false;
    }
  }
  
  return true;
}