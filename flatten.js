const flatten = function (array) {
  let flatArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i of item) {
        flatArray.push(i);
      }
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

module.exports = flatten;
