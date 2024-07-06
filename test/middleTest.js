const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual");

// TEST CASES
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["Please", "Work", "I", "Beg", "Of", "You"]), ["I", "Beg"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, "hello", true]), ["hello"]);