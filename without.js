// IMPLEMENT EQUAL ARRAYS AND ASSERT ARRAYS EQUAL FUNCTIONS

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
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) { // check if arrays aren't equal
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`); // if unequal, log failure message to console
    return false;
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // if equal, log success message to console
    return true;
  }
};

// IMPLEMENT FUNCTION
const without = function(source, itemsToRemove) {
  let newSource = []; // create new array with removed items to avoid altering original array
  for (let i = 0; i < source.length; i++) { // iterate through each element of source array
    if (!itemsToRemove.includes(source[i])) { // check if element of source array is included in the itemsToRemove array
      newSource.push(source[i]); // if not included, add element from source to newSource
    }
  }
  return newSource; // return new modified array
};


// TEST CASES
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without(["That's", "No", "Moon"], ["No"]), ["That's", "Moon"]);
assertArraysEqual(without([24, 5, 12, 92], [92, 5]), [24, 12]);

// TEST ORIGINAL SOURCE WAS NOT MODIFIED
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function