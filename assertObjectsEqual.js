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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys = Object.keys(object1);
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(
      `\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `\u26D4 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: 1 }, { a: 1 });
