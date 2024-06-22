// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) { // iterate through keys of object
    if (callback(object[key])) { // check value against callback function
      return key; // return first key whose value returns true
    }
  }
};

// TEST CASES
const bestSellingModel = {
  Ford: "F-Series",
  Chevy: "Silverado",
  Toyota: "RAV4",
  Honda: "CR-V"
};
assertEqual(findKey(bestSellingModel, (x) => x === "Silverado"), "Chevy");

const starRatings = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
assertEqual(findKey(starRatings, (x) => x.stars === 2), "noma");

const nationStats = {
  Canada: {Population: 38.93, GDP: 2.138},
  Russia: {Population: 144.20, GDP: 2.24},
  China: {Population: 1412.00, GDP: 17.96},
};
assertEqual(findKey(nationStats, (x) => x.Population >= 1000.00), "China");
assertEqual(findKey(nationStats, (x) => x.Population + x.GDP === 146.44), "Russia");