// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u26D4 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("One", "One"));