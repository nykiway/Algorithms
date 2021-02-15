function roomba(moves, x, y) {
  let coordinates = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    switch (move) {
      case 'NORTH':
        coordinates[1] += 1;
        break;
      case 'SOUTH':
        coordinates[1] -= 1;
        break;
      case 'EAST':
        coordinates[0] += 1;
        break;
      case 'WEST':
        coordinates[0] -= 1;
        break;
      default:
        break
    }
  }
  if (coordinates[0] === x && coordinates[1] === y) return true;
  return false;
}

console.log(roomba(['NORTH', 'EAST'], 1, 1)) // true
console.log(roomba(['WEST', 'EAST'], 1, 0)) // false