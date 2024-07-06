const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = middle;