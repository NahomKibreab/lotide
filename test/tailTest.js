const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Hello', 'Lighthouse', 'Labs'] for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
