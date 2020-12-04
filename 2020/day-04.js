// input:
// document
//   .querySelector('pre')
//   .innerText
//   .trim()
//   .split('\n\n')

const FIELDS = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  // 'cid',
];

export const isValidPassport = (passport) => {
  const data = passport
    .replace(/\n/g, ' ')
    .split(' ')
    .map(str => str.split(':')[0])
    .filter(str => str !== 'cid')
    .sort()
    .join();
  
  return data === FIELDS.sort().join();
};

export const q1 = (input) => {
  return input
    .filter(isValidPassport)
    .length;
};

export const hasValidData = (passport) => {
  const data = passport
    .replace(/\n/g, ' ')
    .split(' ')
    .map(str => {
      const [key, value] = str.split(':');
      return { [key]: value };
    });

  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = Object.assign(...data);

  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  // hgt (Height) - a number followed by either cm or in:
  //    If cm, the number must be at least 150 and at most 193.
  //    If in, the number must be at least 59 and at most 76.
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  // pid (Passport ID) - a nine-digit number, including leading zeroes.

  return (Number(byr) >= 1920 && Number(byr) <= 2002)
    && (Number(iyr) >= 2010 && Number(iyr) <= 2020)
    && (Number(eyr) >= 2020 && Number(eyr) <= 2030)
    && (
      (hgt.endsWith('cm') && Number(hgt.split('cm')[0]) >= 150 && Number(hgt.split('cm')[0]) <= 193)
      || (hgt.endsWith('in') && Number(hgt.split('in')[0]) >= 59 && Number(hgt.split('in')[0]) <= 76)
    )
    && (/#[0-9a-f]{6}/g.test(hcl))
    && (['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl))
    && (Number(pid) && pid.length === 9);
};

export const q2 = (input) => {
  return input
    .filter(isValidPassport)
    .filter(hasValidData)
    .length;
};
