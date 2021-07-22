const words = ["ground", "control", "to", "major", "tom"];

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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(
  assertArraysEqual(
    results1,
    words.map((e) => e[0])
  )
);
