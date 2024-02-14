function solution(queries) {
  //각 완두콩은 혼자해서 4개를 남김
  //RR , rr은 자신과 똑같은애 4개
  //Rr은 RR , Rr , Rr , rr

  //몇세대 , 몇번째에 뭐가 있는지?
  //거슬러 올라가서 2세대가 누군지 알아야함
  //2세대가 'RR' or 'rr'이면 -> 자식도 모두 동일
  //아닐 시에는 하나씩 따져봐야 함

  const gen2 = [null, "RR", "Rr", "Rr", "rr"]

  return queries.map(query => {
    let [gen, nth] = query
    const ancestor = []
    if (gen === 1) {
      return "Rr"
    }
    if (gen === 2) {
      return gen2[nth]
    }

    while (gen > 2) {
      gen--
      ancestor.unshift(nth % 4) //부모의 자식들 중에 몇번째에 있는지
      nth = Math.floor((nth - 1) / 4) + 1 //부모가 현재 세대에서 몇번째에 있는지
    }
    let top = gen2[nth]

    if (nth === 1 || nth === 4) {
      return top
    }

    for (let n of ancestor) {
      if (top === "RR" || top === "rr") {
        return top
      }
      top = gen2[n === 0 ? 4 : n] //부모가 결정되었으니 자신이 부모의 몇번째 자식인지를 통해 현재 세대에서 본인의 형질을 알 수 있음
    }
    return top
  })
}
