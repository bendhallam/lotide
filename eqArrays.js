// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// IMPLEMENT FUNCTION

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) { // check if arrays are the different length
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++)
      if (arrOne[i] !== arrTwo[i]) { // check if arrays have any mismatching elements
        return false;
      }
  }
  return true; // if neither differences are flagged, return true
};

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [2, 3, 1]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), true); // should fail
assertEqual(eqArrays(["Josh", "Ben", "Daniel"], ["John", "Brian", "Dylan"]), false); // should pass
assertEqual(eqArrays(["Josh", "Ben", "Daniel"], ["Josh", "Ben", "Daniel"]), true); // should pass
