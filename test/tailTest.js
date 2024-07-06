// IMPORT ASSERTEQUAL
const assertEqual = require("../assertEqual")
const tail = require("../tail")

// TEST CASES
const numbers = [1, 2, 4, 5];
assertEqual(tail(numbers)[0], 2);
assertEqual(tail(numbers)[1], 4);
assertEqual(tail(numbers)[2], 5);

const strings = ["What's", "in", "the", "box?"];
assertEqual(tail(strings)[0], "in");
assertEqual(tail(strings)[1], "the");
assertEqual(tail(strings)[2], "box?");

// TEST CASE: CHECK ORIGINAL ARRAY
const words = ["Hello there", "General", "Kenobi"];
tail(words);
assertEqual(tail(words).length, 2);
assertEqual(words.length, 3);

const noWords = [];
tail(noWords);
assertEqual(tail(noWords).length, 0);
assertEqual(noWords.length, 0);

const oneWord = ["Word"];
tail(oneWord);
assertEqual(tail(oneWord).length, 0);
assertEqual(oneWord.length, 1);