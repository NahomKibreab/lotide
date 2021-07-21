const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  let isEqual = true;
  array1.forEach((element, index) => {
    if (element !== array2[index]) {
      isEqual = false;
    }
  });
  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
