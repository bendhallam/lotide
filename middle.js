// IMPLEMENT EQUAL ARRAYS FUNCTION - checks if two arrays are equal and report result to console
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
const middle = function(arr) {
  let middleArr = []; // create an empty array to push middle elements into
  let middleIndex = Math.floor(arr.length / 2); // give us the element in the previously calculated middle index
  // NOTE: if the array is even in length, this will give us the second of the two middle elements
  if (arr.length % 2 === 0) { // check if array is even
    middleArr.push(arr[middleIndex - 1]); // push the first middle element into the new array
    middleArr.push(arr[middleIndex]); // push the second middle element into the new array
  } else {
    middleArr.push(arr[middleIndex]); // push the middle element into the new array
  }
  return middleArr; // return new array of middle element(s)
};

// TEST CASES
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["Please", "Work", "I", "Beg", "Of", "You"]), ["I", "Beg"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, "hello", true]), ["hello"]);