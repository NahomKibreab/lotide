const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u26D4 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = function(array) {
  return array.shift();
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));