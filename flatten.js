const eqArrays = function (array1, array2) {
  let isEqual = false;
  if (array1.length === array2.length) {
    array1.forEach((element, index) => {
      console.log("array2 with index: ", array2[index]);
      if (element !== array2[index]) {
        isEqual = false;
      } else {
        isEqual = true;
      }
    });
  }
  return isEqual;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`\u2705 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

console.log(flatten([1, 2, [3, 4], 5, [6]]));
