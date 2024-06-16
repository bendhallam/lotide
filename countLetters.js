// IMPLEMENT ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// IMPLEMENT FUNCTION
const countLetters = function(str) {
  const results = {}; // create empty object to store letters and their counts
  for (let char of str) { // iterate through each letter of the inputted string
    if (results[char]) { // check if letter has already been indexed
      results[char] += 1; // if it has, increase it's count by 1
    } else {
      results[char] = 1; // if it hasn't, initialize its count at 1
    }
  }
  return results;
};

// TEST CASES
assertEqual(countLetters("lighthouse labs")["l"], 2);
assertEqual(countLetters("learning is difficult but rewarding")["i"], 5);
assertEqual(countLetters("dhdhdhdhdhdhd")["d"], 7);