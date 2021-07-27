const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
