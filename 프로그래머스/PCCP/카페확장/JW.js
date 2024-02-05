function solution(menu, order, k) {
  let coffeeMadeTime = 0;
  let maxResult = 0;

  const mappedOrder = order.map((o, i) => {
    coffeeMadeTime = Math.max(coffeeMadeTime, k * i) + menu[o];
    return [k * i, coffeeMadeTime];
  });

  const flattedOrder = mappedOrder.flat();

  flattedOrder.forEach((f) => {
    const stack = [];

    mappedOrder.forEach((m) => {
      const [inTime, outTime] = m;
      if (
        stack.length > 0 &&
        stack[stack.length - 1][1] === f &&
        inTime === f
      ) {
        stack.pop();
      }
      if (inTime <= f && outTime >= f) {
        stack.push(m);
      }
    });

    maxResult = Math.max(maxResult, stack.length);
  });

  return maxResult;
}
