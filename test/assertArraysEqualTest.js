const assertArraysEqual = require("../assertArraysEqual");

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5]); // should fail
assertArraysEqual(["I", "Love", "You"], ["I", "Love", "You"]); // should pass
assertArraysEqual([], []); // should pass
assertArraysEqual(["I", "Am", "Your", "Father"], ["That's", "Not", "True"]); // should fail