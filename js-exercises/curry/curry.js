function curry(fnToBeCurried) {
  const curried = (...outerArgs) => {
    if (outerArgs.length >= fnToBeCurried.length) return fnToBeCurried.apply(this, outerArgs);
    return (...innerArgs) => curried.apply(this, outerArgs.concat(innerArgs));
  };
  return curried;
}

export { curry };
