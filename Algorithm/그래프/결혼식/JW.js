let input = require('fs')
  .readFileSync('/dev/stdin')
  // .readFileSync('Algorithm/그래프/결혼식/예제1.txt')
  .toString()
  .split('\n');

const N = +input[0];
const M = +input[1];
const R = input.slice(2, 2 + M).map((line) => line.split(' ').map(Number));

const friends = {};

for (let i = 1; i <= N; i++) {
  friends[i] = new Set();
}

R.forEach(([a, b]) => {
  friends[a].add(b);
  friends[b].add(a);
});

const directFriends = [...friends[1]];
const invited = new Set(directFriends);

directFriends.forEach((friend) => {
  friends[friend].forEach((friendOfFriend) => {
    invited.add(friendOfFriend);
  });
});

invited.delete(1);

console.log(invited.size);
