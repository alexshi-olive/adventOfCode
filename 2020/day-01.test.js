import { q1, q2 } from './day-01';

test('q1', () => {
  const testInput = [
    1721,
    979,
    366,
    299,
    675,
    1456,
  ];
  const testResult = 514579;

  expect(q1(testInput)).toBe(testResult);
});

test('q2', () => {
  const testInput = [
    1721,
    979,
    366,
    299,
    675,
    1456,
  ];
  const testResult = 241861950;

  expect(q2(testInput)).toBe(testResult);
});