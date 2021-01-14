function map(obj, callback) {
  const transformedArray = [];
  for (const keyValuePair of Object.entries(obj)) transformedArray.push(callback(keyValuePair));
  return Object.fromEntries(transformedArray);
}

function filter(obj, callback) {
  const filteredArray = [];
  for (const keyValuePair of Object.entries(obj)) {
    if (!callback(keyValuePair)) filteredArray.push(keyValuePair);
  }
  return Object.fromEntries(filteredArray);
}

function invert(obj) {
  const invertedObjArray = [];
  for (const [key, value] of Object.entries(obj)) invertedObjArray.push([value, key]);
  return Object.fromEntries(invertedObjArray);
}

function merge(...objects) {
  let resultObj = {};
  for (const object of objects) {
    resultObj = { ...resultObj, ...object };
  }
  return resultObj;
}

function all(obj, callback) {
  let passedAllChecks = true;
  for (const keyValuePair of Object.entries(obj)) {
    if (!callback(keyValuePair)) passedAllChecks = false;
  }
  return passedAllChecks;
}

function some(obj, callback) {
  for (const keyValuePair of Object.entries(obj)) {
    if (callback(keyValuePair)) return true;
  }
  return false;
}

export {
  map, filter, invert, merge, all, some,
};
