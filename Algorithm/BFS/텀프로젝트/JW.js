let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let T = input.shift();
let index = 1;
let count = 0;

let visited;
let done;

while (T > 0) {
  const n = +input[index];
  const arr = input[index + 1].split(' ').map(Number);
  arr.unshift(0);

  visited = Array(n + 1).fill(false);
  done = Array(n + 1).fill(false);

  for (let i = 1; i <= n + 1; i++) {
    if (visited[i]) continue;

    dfs(i);
  }

  console.log(n - count);

  index += 2;
  T -= 1;
  count = 0;
}

function dfs(index) {
  visited[index] = true;
  const next = arr[index];

  if (!visited[next]) {
    dfs(next);
  } else if (!done[next]) {
    for (let i = next; i !== index; i = arr[i]) {
      count += 1;
    }

    count += 1;
  }

  done[index] = true;
}
