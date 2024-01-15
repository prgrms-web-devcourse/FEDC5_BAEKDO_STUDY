function solution(command) {
  const dirs = {
    1: {
      G: [0, 1],
      B: [0, -1],
    },
    2: {
      G: [1, 0],
      B: [-1, 0],
    },
    3: {
      G: [0, -1],
      B: [0, 1],
    },
    4: {
      G: [-1, 0],
      B: [1, 0],
    },
  }
  let dir = 1
  const cord = [0, 0]
  for (const c of command) {
    if (c === "R") {
      dir = dir === 4 ? 1 : dir + 1
      continue
    }
    if (c === "L") {
      dir = dir === 1 ? 4 : dir - 1
      continue
    }
    const [x, y] = dirs[dir][c]
    cord[0] += x
    cord[1] += y
  }
  return cord
}
