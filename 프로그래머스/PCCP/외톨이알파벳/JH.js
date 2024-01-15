function solution(input) {
  //2회 이상 나타난 알파벳 -
  //한마디로 알파벳이 붙어있지 않으면 외톨이 알파벳이라는 소리
  //알파벳이 붙어있는지를 확인해야함
  //알파벳이 각각 몇개있는지 조사 -> indexOf,lastIndexOf로
  const obj = {}
  const alone = []

  for (const char of input) {
    obj[char] = obj[char] ? obj[char] + 1 : 1
  }

  const arr = Object.entries(obj)
  //a가 3개 붙어있다면 index는 n,n+2
  for (const [char, num] of arr) {
    if (num === 1) {
      continue
    }
    if (input.lastIndexOf(char) - input.indexOf(char) + 1 !== num) {
      alone.push(char)
    }
  }

  return alone.length === 0 ? "N" : alone.sort().join("")
}
