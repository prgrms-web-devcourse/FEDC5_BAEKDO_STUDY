// 완전탐색?
// DP로 부분 연산결과를 캐싱?

let fs = require('fs');
const input = fs
  .readFileSync('Algorithm/시뮬레이션/연산자끼워넣기/예제3.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const [N, arr, operators] = input;
let [min, max] = [900000000, -900000000];

const calculate = (a, b, i) => {
  switch (i) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return ~~(a / b); // C++14 나눗셈 기준
    default:
      return;
  }
};

const dfs = (depth, result) => {
  if (depth === N - 1) {
    min = Math.min(result, min);
    max = Math.max(result, max);
    return;
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 0) continue;

    operators[i] -= 1;
    dfs(depth + 1, calculate(result, arr[depth + 1], i));
    operators[i]++;
  }
};

dfs(0, arr[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);
