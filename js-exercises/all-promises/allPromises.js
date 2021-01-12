const allPromises = (promises) => {
  if (!promises) return Promise.resolve();
  const result = [];
  for (const promise of promises) {
    let isRejected = false;
    let rejectReason = '';
    if (promise instanceof Promise) {
      promise.then(
        (fulfilled) => {
          result.push(fulfilled);
        },
        (rejected) => {
          isRejected = true;
          rejectReason = rejected;
        },
      );
    } else {
      Promise.resolve(promise).then((fulfilled) => {
        result.push(fulfilled);
      });
    }
    if (isRejected) return Promise.reject(rejectReason);
  }
  return Promise.resolve(result);
};

export { allPromises };
