import {
  getTreeCount,
  q1,
  q2,
} from './day-03';

const input = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
];

test('q1', () => {
  expect(q1(input)).toBe(7);
});

test('getTreeCount', () => {
  expect(getTreeCount(input, 1)).toBe(2);
  expect(getTreeCount(input, 3)).toBe(7);
  expect(getTreeCount(input, 5)).toBe(3);
  expect(getTreeCount(input, 7)).toBe(4);
  expect(getTreeCount(input, 1, 2)).toBe(2);
});

test('q2', () => {
  expect(q2(input)).toBe(336);
});
