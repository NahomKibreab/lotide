const eqArrays = function (array1, array2) {
  let isEqual = true;
  array1.forEach((element, index) => {
    if (element !== array2[index]) {
      isEqual = false;
    }
  });
  return isEqual;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`\u2705 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["hello"], ["Hello"]);
