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
const takeUntil = (array, callback) => {
  const results = [];
  for (let element of array) { // iterate through elements of array
    if (callback(element) === false) { // while elements are being returned falsey
      results.push(element); // keep adding them to results array
    } else { // until an element is returned falsey
      return results; // then stop adding any more elements and return array
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);