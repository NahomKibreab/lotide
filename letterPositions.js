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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  sentence.split("").forEach((letter, index) => {
    if (results[letter]) {
      results[letter].push(sentence.indexOf(letter, index));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  });
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
