const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it('should return "dram" for "The Wire"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
