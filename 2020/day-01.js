// input:
// document
//   .querySelector('pre')
//   .innerText
//   .trim()
//   .split('\n')
//   .map(Number)

export const q1 = (input) => {
  const len = input.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
};

export const q2 = (input) => {
  const len = input.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
};

export default {
  q1,
  q2,
};