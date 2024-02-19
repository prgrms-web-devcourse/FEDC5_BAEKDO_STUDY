const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n")
const [n, m] = input[0].split(" ").map(Number)
const nums = [...new Set(input[1].split(" "))].map(Number).sort((a, b) => a - b)

const answer = []

function dfs(arr = []) {
  if (arr.length == m) {
    answer.push(arr.join(" "))
  } else {
    for (let i = 0; i < nums.length; i++) {
      dfs([...arr, nums[i]])
    }
  }
}

dfs()

console.log(answer.join("\n"))
