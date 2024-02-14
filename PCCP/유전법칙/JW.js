function solution(queries) {
  return queries.map(getGene);
}

function getGene(query) {
  let [n, p] = query;
  let stack = [];

  p -= 1;

  while (n > 1) {
    stack.push(p % 4);
    n -= 1;
    p = Math.floor(p / 4);
  }

  while (stack.length > 0) {
    num = stack.pop();
    if (num == 0) return 'RR';
    if (num == 3) return 'rr';
  }
  return 'Rr';
}
