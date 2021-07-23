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

const takeUntil = (array, callback) => {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

console.log("---");

const data3 = ["hello", "hi", "hola", "bye", "welcome"];
console.log(
  assertArraysEqual(
    takeUntil(data3, (x) => x === "hola"),
    ["hello", "hi"]
  )
);
