const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
