// ASSERT EQUAL IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// IMPLEMENT FUNCTION
const findKeyByValue = function(obj, val) {
  let keys = Object.keys(obj); // create an array of keys to iterate through
  for (let key of keys) { // iterate through keys
    if (obj[key] === val) { // check if key has specified value
      return key;
    }
  }
  return undefined; // if no such value is present in object, return undefined
};

// TEST CASES
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const bestArtistsByGenre = {
  pop: "Michael Jackson",
  rap: "Kendrick Lamar",
  jazz: "Miles Davis",
};

const numberOfMoons = {
  Earth: 1,
  Mars: 2,
  Saturn: 146,
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestArtistsByGenre, "Kendrick Lamar"), "rap");
assertEqual(findKeyByValue(bestArtistsByGenre, "Miles Davis"), "jazz");
assertEqual(findKeyByValue(numberOfMoons, 146), "Saturn");
assertEqual(findKeyByValue(numberOfMoons, 2), "Mars");