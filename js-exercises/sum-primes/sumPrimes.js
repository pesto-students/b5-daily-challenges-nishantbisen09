/* eslint-disable no-plusplus */
function isPrime(numberToBeChecked) {
  for (let i = 2; i < numberToBeChecked; i++) {
    if (numberToBeChecked % i === 0) return false;
  }
  return true;
}

function getRange(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
}

function getPrimeNoRange(rangeUpperLimit) {
  const range = getRange(2, rangeUpperLimit);
  return range.filter((number) => isPrime(number));
}

function validateInput(input) {
  if (typeof input !== 'number') throw new TypeError(`${input} is not a number`);
}

function sumPrimes(rangeUpperLimit) {
  validateInput(rangeUpperLimit);
  const primeNumberRange = getPrimeNoRange(rangeUpperLimit);
  const sum = primeNumberRange.reduce(
    (acc, currentValue) => acc + currentValue,
    0,
  );
  return sum;
}

export { sumPrimes };
