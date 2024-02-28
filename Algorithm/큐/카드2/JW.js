class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // 리스트가 비어있는 경우
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getHead() {
    return this.head.value;
  }

  getSize() {
    return this.length;
  }
}

const input = require('fs')
  .readFileSync('Algorithm/큐/카드2/예제1.txt')
  .toString()
  .trim();

const list = new LinkedList();
for (let i = 1; i <= input; i++) {
  list.push(i);
}

while (list.length > 1) {
  list.shift();
  list.push(list.getHead());
  list.shift();
}

console.log(list.getHead());
