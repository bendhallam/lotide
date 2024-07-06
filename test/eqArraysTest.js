const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays");

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [2, 3, 1]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), true); // should fail
assertEqual(eqArrays(["Josh", "Ben", "Daniel"], ["John", "Brian", "Dylan"]), false); // should pass
assertEqual(eqArrays(["Josh", "Ben", "Daniel"], ["Josh", "Ben", "Daniel"]), true); // should pass