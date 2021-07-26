const eqArrays = function (array1, array2) {
  let isEqual = true;
  if (array1.length === array2.length) {
    array1.forEach((element, index) => {
      if (element !== array2[index]) {
        isEqual = false;
      }
    });
  } else {
    isEqual = false;
  }
  return isEqual;
};

module.exports = eqArrays;
