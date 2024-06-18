// IMPLEMENT PRELIMINARY FUNCTIONS
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
const eqObjects = function(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) { // Check if same number of keys
    return false; // if different # of keys, no match
  } else { // if same number of keys
    for (let key of key1) { // iterate through the keys of object 1
      if (!obj2[key]) { // check if same key exists in object 2
        return false; // if key doesn't exist in obj2, no match
      } else if (Array.isArray(obj1[key])) { // if key does exist, check if it's value is an array
        if (!eqArrays(obj1[key], obj2[key])) { // if it is an array, check if it matches obj2
          return false; // if it doesn't, no match
        }
      } else if (obj1[key] !== obj2[key]) { // if it isn't an array, check if it matches obj2
        return false; // if it doesn't, no match
      }
    }
    return true; // if no mismatches were flagged, we have a match
  }
};

// IMPLEMENT ASSERT OBJECTS EQUAL FUNCTION
const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require("util").inspect;
  if (eqObjects(objectOne, objectTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
  }
};

// TEST CASES
const objOne = {
  color: "Red",
  taste: "Bad",
  smell: "Eggs"
};
const objTwo = {
  color: "Red",
  taste: "Bad",
  smell: "Eggs"
};
assertObjectsEqual(objOne, objTwo);

const objThree = {
  color: "Red",
  taste: "Bad",
  smell: "Olives"
};
const objFour = {
  color: "Red",
  taste: "Bad",
  smell: "Eggs"
};
assertObjectsEqual(objThree, objFour);