// input:
// document
//   .querySelector('pre')
//   .innerText
//   .trim()
//   .split('\n')

const SETP = 3;
const TREE = '#';

export const q1 = (input) => {
  return input.filter((row, rowIdx) => {
    const index = rowIdx * SETP;
    return row[index % row.length] === TREE;
  }).length;
};

export const getTreeCount = (input, stepX, stepY = 1) => {
  return input
    .filter((_, idx) => !(idx % stepY))
    .filter((row, rowIdx) => {
      const index = rowIdx * stepX;
      return row[index % row.length] === TREE;
    })
    .length;
};

export const q2 = (input) => {
  return getTreeCount(input, 1)
    * getTreeCount(input, 3)
    * getTreeCount(input, 5)
    * getTreeCount(input, 7)
    * getTreeCount(input, 1, 2);
};