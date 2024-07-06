// IMPORT PREREQUISITES
const assert = require('chai').assert;
const middle = require('../middle');

// // TEST CASES
describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("returns ['I', 'Beg'] for ['Please', 'Work', 'I', 'Beg', 'Of', 'You']", () => {
    assert.deepEqual(middle(["Please", "Work", "I", "Beg", "Of", "You"]), ["I", "Beg"])
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
  it("returns ['hello'] for [1, 'hello', true]", () => {
    assert.deepEqual(middle([1, "hello", true]), ["hello"])
  });
});