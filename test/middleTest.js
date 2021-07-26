const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("return [] if for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("return [1,2] if for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return [1,2,3] if for [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [1,2,3,4] if for [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
