// input:
// document
//   .querySelector('pre')
//   .innerText
//   .trim()
//   .split('\n')

export const isValidPwdQ1 = (input) => {
  const re = /(\d+)-(\d+)\s(\w+):\s(\w+)/i;
  const [, min, max, letter, password] = input.match(re);
  const freq = password.split(letter).length - 1;

  return freq >= min && freq <= max;
};

export const q1 = (input) => {
  return input
    .map(isValidPwdQ1)
    .filter(item => item)
    .length;
};

export const isValidPwdQ2 = (input) => {
  const re = /(\d+)-(\d+)\s(\w+):\s(\w+)/i;
  const [, first, second, letter, password] = input.match(re);

  const firstPos = password[first - 1];
  const secondPos = password[second - 1];
  
  return (firstPos !== secondPos) &&
    (firstPos === letter || secondPos === letter);
};

export const q2 = (input) => {
  return input
  .map(isValidPwdQ2)
  .filter(item => item)
  .length;
};
