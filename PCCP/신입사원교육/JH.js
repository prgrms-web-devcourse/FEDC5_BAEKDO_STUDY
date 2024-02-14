function solution(ability, number) {
  class Heap {
    constructor() {
      this.heap = []
    }
    push(val) {
      this.heap.push(val)
      let curIdx = this.heap.length - 1
      let parentIdx = Math.floor((curIdx - 1) / 2)
      while (this.heap[parentIdx] && this.heap[parentIdx] > this.heap[curIdx]) {
        ;[this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
        curIdx = parentIdx
        parentIdx = Math.floor((curIdx - 1) / 2)
      }
    }
    shift() {
      this.heap[0] = this.heap.pop()
      let idx = 0
      let leftIdx = idx * 2 + 1
      let rightIdx = idx * 2 + 2
      while (
        (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[idx]) ||
        (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[idx])
      ) {
        let targetIdx = leftIdx // 왼쪽 자식 노드가 더 작다고 가정
        if (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[targetIdx]) {
          targetIdx = leftIdx
        } else if (
          this.heap[rightIdx] &&
          this.heap[rightIdx] <= this.heap[targetIdx] // 오른쪽 자식 노드가 더 작다면
        ) {
          targetIdx = rightIdx // 오른쪽 자식 노드의 index로 변경
        }
        ;[this.heap[idx], this.heap[targetIdx]] = [this.heap[targetIdx], this.heap[idx]]
        idx = targetIdx
        leftIdx = idx * 2 + 1
        rightIdx = idx * 2 + 2
      }
    }
  }
  const minHeap = new Heap()
  for (const n of ability) {
    minHeap.push(n)
  }

  for (let i = 0; i < number; i++) {
    const sum = minHeap.heap[0] + minHeap.heap[1]
    minHeap.shift()
    minHeap.shift()
    minHeap.push(sum)
    minHeap.push(sum)
  }
  const a = minHeap.heap.reduce((v, i) => v + i)
  return a
}
