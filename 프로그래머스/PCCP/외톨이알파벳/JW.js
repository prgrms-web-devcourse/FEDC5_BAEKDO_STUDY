function solution(input_string) {
  const obj = {};
  let result = '';

  for (const char of input_string) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  for (const key in obj) {
    const replacedString = input_string.replaceAll(key.repeat(obj[key]));
    if (input_string.length === replacedString.length) {
      result += key;
    }
  }

  return result ? result.split('').sort().join('') : 'N';
}
