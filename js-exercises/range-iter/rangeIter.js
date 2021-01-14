/* eslint-disable no-plusplus */
function getInvalidInput(lb, ub) {
  if (typeof lb !== 'number' && typeof ub !== 'number') return `${lb} and ${ub}`;
  if (typeof lb !== 'number') return lb;
  return ub;
}

function validateInput(lb, ub) {
  if (!lb || !ub) {
    throw new TypeError('undefined is not a number');
  } else if (typeof lb !== 'number' || typeof ub !== 'number') {
    throw new TypeError(`${getInvalidInput} is not a number`);
  }
}

function rangeIter(lb, ub) {
  validateInput(lb, ub);
  return {
    current: lb,
    last: ub,
    [Symbol.iterator]() {
      this.current = lb;
      this.last = ub;
      return this;
    },
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      }
      return { done: true };
    },
  };
}
export { rangeIter };
