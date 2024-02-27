/**
 * @step1 크기가 1인 부분수열부터, N인 부분수열까지 모든 경우를 순회하여 합이 S인 경우를 찾는다.
 * @step2 조건에 만족하는 부분수열이 존재할 때마다 경우의 수를 1 증가시킨다.
 * @tip 원소가 n인 집합에서, 부분집합(부분수열)의 개수는 2^n개이다.
 */

// 입출력
const solve = (N, S, arr) => {
  let output = 0;
  const recursion = (depth, sum) => {
    if (depth === N) return;

    sum += arr[depth];
    if (sum === S) output++;

    recursion(depth + 1, sum);
    recursion(depth + 1, sum - arr[depth]);
  };

  recursion(0, 0);
  return output;
};

let input = fs
  .readFileSync('Algorithm/백트래킹/부분수열의합/예제.txt')
  .toString()
  .split('\n');

const count = input[0].split(' ').map((e) => +e);
const numbers = input[1].split(' ').map((e) => +e);
const n = count[0];
const s = count[1];

const result = solve(n, s, numbers);
console.log(result);
