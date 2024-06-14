// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: ${actual} === ${expected}");
  } else {
    console.log("❌❌❌ Assertion Failed: ${actual} !== ${expected}");
  }

};

const babies = true;
const apples = true;

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(babies, apples);
assertEqual("ostriches", "peanuts");
assertEqual("Animals", "Animals");