// IMPLEMENT ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// IMPLEMENT FUNCTION
// allItems: an array of string that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // create an empty object to put results into
  for (const item of allItems) { // iterate through every item in array
    if (itemsToCount[item]) { // check if item is on the count list
      if (results[item]) { // check if the item is already on the results list
        results[item] += 1; // if it is, increase its count
      } else {
        results[item] = 1; // if it isn't, initialize its count to 1
      }
    }
  }
  return results;
};


// TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);