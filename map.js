// IMPLEMENT ASSERT ARRAYS EQUAL FUNCTION
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
const map = (array, callback) => {
  const results = [];
  for (let item of array) { // iterate through items in array
    results.push(callback(item)); // create new array of old elements run through callback function
  }
  return results;
};

// TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']); // grab the first letter of each word

const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(numbers, (number) => number * 2), [2, 4, 6, 8, 10]); // multiply numbers in array by 2

const people = ["John", "Peter", "Paul"];
assertArraysEqual(map(people, (person) => person + "son"), ["Johnson", "Peterson", "Paulson"]); // give each name the suffix -son