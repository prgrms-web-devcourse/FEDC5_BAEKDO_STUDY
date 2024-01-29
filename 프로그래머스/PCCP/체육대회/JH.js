function solution(ability) {
  const types = Array(ability[0].length + 1).fill(0)
  let result = 0
  const typesArray = []
  const 종목경우의수 = (typesArr, studentsArr) => {
    if (typesArr.length >= studentsArr.length) {
      let sum = 0
      for (let i = 0; i < typesArr.length; i++) {
        sum += ability[studentsArr[i] - 1][typesArr[i] - 1]
      }
      result = Math.max(result, sum)
      return
    }
    for (let i = 1; i < types.length; i++) {
      if (!types[i]) {
        types[i] = 1
        종목경우의수([...typesArr, i], studentsArr)
        types[i] = 0
      }
    }
  }
  const 학생경우의수 = (arr, idx) => {
    if (arr.length >= types.length - 1) {
      종목경우의수([], arr)
      return
    }
    for (let i = idx + 1; i <= ability.length; i++) {
      학생경우의수([...arr, i], i)
    }
  }
  학생경우의수([], 0)
  return result
}
