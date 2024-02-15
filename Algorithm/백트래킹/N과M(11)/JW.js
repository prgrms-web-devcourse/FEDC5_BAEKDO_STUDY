/**
 * @solution1 주어진 숫자 배열에서 S개를 뽑아 순열을 만드는 경우의 수
 * @solution2 하나의 숫자가 여러 번 쓰일 수 있기 때문에, S개를 뽑는다기보다 S번 선택한다는 개념으로 접근
 * @returns S번 선택된 모든 경우의 수를 반환
 */

const solution = (N, S, numbers) => {
  const output = [];
  // 1. 중복 제거 및 정렬
  const set = new Set(numbers);
  const arr = [...set].sort();

  // 2. DFS
  // arr.length가 S이면 output에 집어넣고 탈출
  numbers.forEach((number) => {
    const stack = [[number]];

    while (stack.length > 0) {
      const pop = stack.pop();

      if (pop.length === S) {
        output.push(pop);
      } else {
        numbers.forEach((n) => {
          stack.push([...pop, n]);
        });
      }
    }
  });

  // 3. output unique화 및 정렬
  const uniqueArr = Array.from(new Set(output.map(JSON.stringify)), JSON.parse);

  return uniqueArr.sort();
};

let fs = require('fs');
let input = fs
  .readFileSync('Algorithm/백트래킹/N과M(11)/예제3.txt')
  .toString()
  .split('\n');

const ns = input[0].split(' ').map((el) => +el);
const N = ns[0];
const S = ns[1];
const numbers = input[1].split(' ').map((el) => +el);

const result = solution(N, S, numbers);

result.forEach((r) => {
  console.log(...r);
});
