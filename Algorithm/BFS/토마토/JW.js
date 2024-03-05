let input = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('Algorithm/BFS/토마토/예제2.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '))
  .map((arr) => arr.map(Number));

let [M, N, H] = input.shift();
const boxes = input.reduce((result, value, index, array) => {
  if (index % N === 0) result.push(array.slice(index, index + N));
  return result;
}, []);

// (0,0,0)부터 모든 원소 순회 -> 값이 1인 원소를 만나면, 해당 위치를 방문처리, 동서남북상하를 검사하여 값이 0인 곳을 1로 변경 + 방문처리
// 한 바뀌 돌았으면 day++, boxes의 0 갯수를 검사함 -> 0이 없으면 다 익은 것이므로, day를 반환
// 만약 변경할 수 있는 곳이 없는데, 0이 존재한다? 그럼 -1을 반환

class Node {
  constructor(x, y, z, count) {
    this.prev = null;
    this.next = null;
    this.x = x;
    this.y = y;
    this.z = z;
    this.count = count;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x, y, z, count) {
    const node = new Node(x, y, z, count);
    if (!this.size) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    const node = this.front;
    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = node.next;
      this.front.prev = null;
    }
    this.size--;
    return node;
  }
}
const queue = new Queue();
let output = 0;
let zeroCount = 0;
const offsetX = [-1, 1, 0, 0, 0, 0];
const offsetY = [0, 0, -1, 1, 0, 0];
const offsetZ = [0, 0, 0, 0, -1, 1];

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (boxes[z][y][x] === 1) {
        queue.enqueue(x, y, z, 0);
      } else if (boxes[z][y][x] === 0) {
        zeroCount++;
      }
    }
  }
}

while (queue.size) {
  const { x, y, z, count } = queue.dequeue();
  offsetZ.forEach((dz, i) => {
    const nx = x + offsetX[i];
    const ny = y + offsetY[i];
    const nz = z + dz;
    if (boxes[nz]?.[ny]?.[nx] === 0) {
      boxes[nz][ny][nx] = 1;
      queue.enqueue(nx, ny, nz, count + 1);
      zeroCount--;
      output = Math.max(output, count + 1);
    }
  });
}

if (zeroCount) {
  console.log(-1);
} else {
  console.log(output);
}
