const middle = function (array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.splice(Math.floor((array.length - 1) / 2), 2);
  } else if (array.length % 2 !== 0) {
    return array.splice(Math.floor((array.length - 1) / 2), 1);
  } else {
    return [];
  }
};

module.exports = middle;
