const solution = (seq) => {
  const queue = [...seq];

  while (queue.length > 1) {
    queue.shift();
    const shift = queue.shift();
    queue.push(shift);
  }

  return queue;
};

let fs = require('fs');
let input = fs
  .readFileSync('Algorithm/큐/카드2/예제1.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => +e);

const seq = new Array(...input).fill(0).map((_, i) => i + 1);
const answer = solution(seq);
console.log(answer);
