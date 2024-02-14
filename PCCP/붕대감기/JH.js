function solution(bandage, health, attacks) {
  //t초 * x => 성공하면 +y
  //최대치 존재 - 0이하면 죽음
  const [t, x, y] = bandage
  let currentTime = 0
  let currentHP = health
  for (const [time, attack] of attacks) {
    const duration = time - currentTime - 1 // 연속시간
    currentHP += x * duration
    if (duration >= t) {
      currentHP += y * Math.floor(duration / t) // 연속시간 여러번 채울수도 있음
    }
    currentHP = Math.min(health, currentHP)
    currentHP -= attack
    if (currentHP <= 0) {
      return -1
    }
    currentTime = time
  }
  return currentHP <= 0 ? -1 : currentHP
}
