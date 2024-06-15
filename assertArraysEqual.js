// IMPLEMENT EQUAL ARRAYS FUNCTION

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


// IMPLEMENT ASSERT ARRAYS EQUAL FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) { // check if arrays aren't equal
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`); // if unequal, log failure message to console
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // if equal, log success message to console
  }
};


// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5]); // should fail
assertArraysEqual(["I", "Love", "You"], ["I", "Love", "You"]); // should pass
assertArraysEqual([], []); // should pass
assertArraysEqual(["I", "Am", "Your", "Father"], ["That's", "Not", "True"]); // should fail