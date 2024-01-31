function solution(menu, order, k) {
  let coffeeMadeTime = 0;
  let maxResult = 0;

  const mappedOrder = order.map((o, i) => {
    coffeeMadeTime += menu[o];
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

  //     1차원으로 spread된 mappedOrder을 순회하며, 해당 시간내 들어올 수 있는 손님을 전부 넣음
  //     하나씩 빼면서 [0] <= time <= [1]이고,
  //     queue의 마지막 원소의 퇴장 시간과 현재 시간, 새로 들어오는 원소의 입장 시간이 같을 경우
  //     queue의 마지막 손님을 내보냄
  //     해당 시간내에서 mappedOrder을 전부 순회하였을 때 qeueue의 길이를 반환
}

// 테스트케이스 4, 5, 7, 8, 10 실패