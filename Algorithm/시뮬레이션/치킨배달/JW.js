const getCoordByNumber = (number, arr) => {
  const size = arr.length;
  const dst = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] === number) dst.push([i + 1, j + 1]);
    }
  }
  return dst;
};

function getCombinations(arr, select) {
  const results = [];
  if (select == 1) return arr.map((e) => [e]);

  arr.forEach((e, i, o) => {
    const rest = o.slice(i + 1);
    const combinations = getCombinations(rest, select - 1);
    const attached = combinations.map((r) => [e, ...r]);
    results.push(...attached);
  });

  return results;
}

const carDistance = (x, y) => Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);

let fs = require('fs');
let input = fs
  .readFileSync('Algorithm/시뮬레이션/치킨배달/예제4.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = [input[0].split(' ')[0], input[0].split(' ')[1]];
let arr = input.slice(1);
arr = arr.map((row) => row.split(' ').map(Number));

// 1. 치킨집 좌표 추출
const chickenCoords = getCoordByNumber(2, arr);

// 2. 가정집 좌표 추출
const houseCoords = getCoordByNumber(1, arr);

// 3. 치킨집 중 M개를 뽑는 조합
const chickenCombs = getCombinations(chickenCoords, M);

const result = [];

chickenCombs.forEach((comb) => {
  let minSum = 0;

  houseCoords.forEach((h) => {
    let tmp = Infinity;
    comb.forEach((c) => {
      const result = carDistance(c, h);
      tmp = Math.min(tmp, result);
    });
    minSum += tmp;
  });

  result.push(minSum);
});

// 1. 모든 집의 치킨 거리를 계산하고, 어떤 치킨집을 가리키는지 횟수로 정렬
// 2. 가리키는 횟수가 가장 작은 치킨집부터 M개만 남기고 지움
// 3. 치킨 거리를 다시 계산

// 도시의 치킨 거리가 가장 작게 되는지의 뜻이, 최소 거리를 반환하라는 뜻인지
console.log(N, M);
console.log(chickenCoords);
console.log(houseCoords);
console.log(chickenCombs);

console.log(result);
console.log(Math.min(...result));
