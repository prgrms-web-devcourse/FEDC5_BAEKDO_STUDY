function solution(command) {
  const direction = ['N', 'E', 'S', 'W'];
  let currentIdx = 0;
  let currentCoord = [0, 0];

  for (const char of command) {
    let currentDirection = direction[currentIdx];

    if (char === 'R') {
      currentIdx = currentIdx + 1 >= direction.length ? 0 : currentIdx + 1;
    } else if (char === 'L') {
      currentIdx = currentIdx - 1 <= -1 ? 3 : currentIdx - 1;
    } else if (char === 'G') {
      if (currentDirection === 'N') {
        currentCoord[1]++;
      } else if (currentDirection === 'E') {
        currentCoord[0]++;
      } else if (currentDirection === 'S') {
        currentCoord[1]--;
      } else if (currentDirection === 'W') {
        currentCoord[0]--;
      }
    } else if (char === 'B') {
      if (currentDirection === 'N') {
        currentCoord[1]--;
      } else if (currentDirection === 'E') {
        currentCoord[0]--;
      } else if (currentDirection === 'S') {
        currentCoord[1]++;
      } else if (currentDirection === 'W') {
        currentCoord[0]++;
      }
    }
  }

  return currentCoord;
}
