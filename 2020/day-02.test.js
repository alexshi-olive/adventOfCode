import {
  isValidPwdQ1,
  isValidPwdQ2,
} from './day-02';

test('isValidPwdQ1', () => {
  expect(isValidPwdQ1('1-3 a: abcde')).toBe(true);
  expect(isValidPwdQ1('1-3 b: cdefg')).toBe(false);
  expect(isValidPwdQ1('2-9 c: ccccccccc')).toBe(true);
});

test('isValidPwdQ2', () => {
  expect(isValidPwdQ2('1-3 a: abcde')).toBe(true);
  expect(isValidPwdQ2('1-3 b: cdefg')).toBe(false);
  expect(isValidPwdQ2('2-9 c: ccccccccc')).toBe(false);
});
