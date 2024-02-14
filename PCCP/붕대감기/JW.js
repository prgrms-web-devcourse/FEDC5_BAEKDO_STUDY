function solution(bandage, health, attacks) {
  let currentTime = 0;
  let continuosTime = 0;
  let leftHealth = health;

  while (attacks.length > 0 && attacks[attacks.length - 1][0] > currentTime) {
    currentTime++;
    continuosTime++;

    //         공격 받았을 시
    if (attacks[0] && attacks[0][0] === currentTime) {
      leftHealth -= attacks[0][1];
      continuosTime = 0;
      attacks.shift();

      if (leftHealth <= 0) return -1;
    } else {
      leftHealth = Math.min(health, leftHealth + bandage[1]);
    }

    //         연속 시전 성공 시
    if (continuosTime === bandage[0]) {
      leftHealth = Math.min(health, leftHealth + bandage[2]);
      continuosTime = 0;
    }
  }

  return leftHealth;
}
