// IMPLEMENT EQUAL ARRAYS FUNCTION - checks if two arrays are equal

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
// IMPLEMENT ASSERT ARRAYS EQUAL FUNCTION - prints to the console the result of eqArrays function
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
const flatten = function(arr){
  let flatArr = []; // create empty array for elements of source array to be pushed into
  for (let i = 0; i < arr.length; i++) { // iterate through the elements of arr
    if (Array.isArray(arr[i])) { // check if the element is an array
      for (let j = 0; j < arr[i].length; j++) { // if element is an subarray, iterate through the elements of the subarray
        flatArr.push(arr[i][j]); // push elements of the subarray into the empty array
      }
    } else { // if not an array
      flatArr.push(arr[i]) // push element into empty array
    }
  }
  return flatArr; // return new flattened array
}



// TEST CASES
assertArraysEqual(flatten([1, [2, 4, 5], 3]), [1, 2, 4, 5, 3]);
assertArraysEqual(flatten(["I", "Am", ["Very", "Thirsty"], "and", "Hungry"]), ["I", "Am", "Very", "Thirsty", "and", "Hungry"]);
assertArraysEqual(flatten([1, 3, ["what's", "up"], "there's", "numbers", 2, 3]), [1, 3, "what's", "up", "there's", "numbers", 2, 3])