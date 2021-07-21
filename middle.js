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

console.log("[]", middle([]));
console.log("[1]", middle([1]));
console.log("[1,2]", middle([1, 2]));
console.log("[1,2,3]", middle([1, 2, 3]));
console.log("[1,2,3,4]", middle([1, 2, 3, 4]));
