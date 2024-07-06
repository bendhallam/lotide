// IMPORT PREREQUISITES
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CASES
describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [5, 6, 3, 7] for [1, 5, 6, 3, 7]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns empty array for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns empty array for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns empty array if given empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});