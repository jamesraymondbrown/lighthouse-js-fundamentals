const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let spot = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == 'north') {
      spot[1] = spot[1] + 1;
    } else if (moves[i] == 'east') {
      spot[0] = spot[0] + 1;
    } else if (moves[i] == 'west') {
      spot[0] = spot[0] - 1;
    } else if (moves[i] == 'south') {
      spot[1] = spot[1] - 1;
    }
    
  }
  return spot;
}


finalPosition(moves);