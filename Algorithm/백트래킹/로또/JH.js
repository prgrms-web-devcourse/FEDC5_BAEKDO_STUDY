const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n")

input.pop()

const b = input.map(v => v.split(" ").map(v => +v))
let str = ""
const dfs = (result = [], arr, idx) => {
  if (result.length === 6) {
    str += result.join(" ") + "\n"
    return
  }
  for (let j = idx; j < arr.length; j++) {
    dfs([...result, arr[j]], arr, j + 1)
  }
}

for (let i = 0; i < b.length; i++) {
  const c = b[i]
  c.shift()
  dfs([], c, 0)
  str += "\n"
}

console.log(str)
