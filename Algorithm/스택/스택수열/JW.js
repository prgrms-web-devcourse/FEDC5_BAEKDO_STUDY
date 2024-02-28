let fs = require('fs');
// const input = fs.readSync('/dev/stdin').toString().trim().split('\n');
const input = fs
  .readFileSync('Algorithm/스택/스택수열/예제1.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => +e);

const [n, ...nums] = input;

const seq = new Array(n).fill(0).map((_, i) => i + 1);

const solution = (n, numbers) => {
  const stack = [];
  let answer = '';
  let count = 1;

  for (let i = 0; i < n; i++) {
    const num = numbers.shift();

    while (count <= num) {
      stack.push(count++);
      answer += '+ ';
    }

    const pop = stack.pop();

    if (pop !== num) {
      return 'NO';
    }
    answer += '- ';

    return answer.split(' ').join('\n');
  }
};

const answer = solution(n, nums);
console.log(answer);

// 1. input에서 하나씩 뺌, 4인 경우
// 2. stack의 마지막 숫자를 Detect
// 3. 마지막 숫자가 뺀 숫자(4)보다 작은 경우, 다음 수부터 Push
// 4. 계속 Push하다가 4에 도달했으면 다음 input을 빼고 반복
// 5. 마지막 숫자가 뺀 숫자보다 큰 경우,
