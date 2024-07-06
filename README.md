# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bendhal/lotide`

**Require it:**

`const _ = require('@bendhal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)`: prints a message to the console declaring wether two arrays are entirely equal
- `assertEqual(value1, value2)`: prints a message to the console declaring wether two values are entirely equal
- `assertObjectsEqual(object1, object2)`: prints a message to the console declaring wether two objects have entirely matching key value pairs
- `countLetters(string)`: counts the number of letters in a string
- `countOnly(array, toCount)`: counts the number of times a specified entry shows up in an array
- `eqArrays(array1, array2)`: checks if two arrays are entirely equal and returns true or false
- `eqObjects(object1, object2)`: checks if two objects are entirely equal and returns true or false
- `findKey(object, function)`: searches through an object and returns first key that returns a truthy answer to the callback function
- `findKeyByValue(object, value)`: searches through an object and returns first key that has the specified value
- `flatten(array)`: takes an array and finds any sub arrays and adds their elements to the main array subsequently removing said sub-array
- `head(array)`: takes an array and returns the first entry
- `letterPositions(string)`: creates an object that logs an array of indices for each letters position in the specified string
- `map(array, callback)`: applies a callback to each element of an array and create a new array with the returned values of that callback
- `middle(array)`: returns the middle elements of an array
- `tail(array)`: returns every element of an array except for the first element
- `takeUntil(array, callback)`: adds elements of an array to a new array until the callback returns falsey for an element
- `without(array, itemToRemove)`: returns new array without specified item