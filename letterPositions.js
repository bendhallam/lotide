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
const letterPositions = function(sentence) {
  const results = {}; // create empty object to put letters and positions
  for (let i = 0; i < sentence.length; i++) { // iterate through characters within sentence string
    const char = sentence.charAt(i); // create a variable to store long repeated value
    if (char !== ' ') {  // ensure character is not a space
      if (results[char]) { // check if character has already appeared in string
        results[char].push(i); // if it has, add its position it to the position array
      } else {
        results[char] = [i]; // if not initialize array with its position
      }
    }
  }
  return results;
};

// TEST CASES
assertArraysEqual(letterPositions("Hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("Hello")["H"], [0]);
assertArraysEqual(letterPositions("it is time to shine")["i"], [0, 3, 7, 16]);