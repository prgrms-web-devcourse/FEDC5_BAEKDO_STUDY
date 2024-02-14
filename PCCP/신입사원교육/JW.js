function solution(ability, number) {
  const heap = new MinHeap();

  ability.forEach((el) => {
    heap.push(el);
  });

  for (let i = 0; i < number; i++) {
    const first = heap.pop();
    const second = heap.pop();
    const sum = first + second;

    heap.push(sum);
    heap.push(sum);
  }

  return heap.sum();
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  sum() {
    if (this.heap.legnth === 0) return 0;

    return this.heap.reduce((a, b) => a + b);
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      this.heap[parentIndex] &&
      this.heap[index] < this.heap[parentIndex]
    ) {
      this.swap(index, parentIndex);

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const poppedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return poppedValue;
  }

  bubbleDown() {
    let index = 0;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;

    while (
      (this.heap[leftChildIndex] &&
        this.heap[leftChildIndex] < this.heap[index]) ||
      (this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[index])
    ) {
      let smallerChildIndex = leftChildIndex;

      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
      leftChildIndex = index * 2 + 1;
      rightChildIndex = index * 2 + 2;
    }
  }
}

// 1안
// 정렬해서 두 명 뽑고, 계산 후 다시 넣어서 정렬?

// 2안
// 최소 이진힙으로, 루트 값을 빼거나 추가할 때마다 재정렬
// number만큼 반복하면 됨
