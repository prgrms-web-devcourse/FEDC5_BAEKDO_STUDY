function solution(menu, order, k) {
  // 카페에서 동시에 최대 몇 명이 머물렀는지
  // 한 손님이 n초에 들어와서 m초에 나감
  // 이 동안에 몇명의 손님이 들어오는지
  const queue = []
  let time = 0
  const arr = order.map((n, i) => {
    //입장시간은 k*i
    //나오는 시간은 만약에 본인 입장시간보다 앞에애가 먼저끝나면 - 입장시간+menu[n]
    //본인 입장시간보다 앞에 애가 안끝나면 - time+menu[n]
    const start = k * i
    if (time < start) {
      time = start + menu[n]
    } else {
      time = time + menu[n]
    }
    return [start, time]
  })
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    let time = arr[i][1] //나가는 시간
    for (let j = i; j < arr.length; j++) {
      if (arr[j][0] < time && j === arr.length - 1) {
        //만약 모든 고객이 다 들어올 경우
        result = Math.max(result, j - i + 1)
        break
      }
      if (arr[j][0] < time) {
        //앞에 애가 나가는 시간보다 먼저 들어올경우
        continue
      } else {
        result = Math.max(result, j - i)
        break
      }
    }
  }

  return result
}
