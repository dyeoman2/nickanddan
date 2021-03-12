var _ = require('lodash');
/**
 * returns true if the number is negative or odd
 * ex: isNegativeOrOdd(1); -> true
 * ex: isNegativeOrOdd(-2); -> true
 * ex: isNegativeOrOdd(2); -> false
 */
function isNegativeOrOdd(value) {
  if (value % 2 === 1 || value < 0) return true;
  else return false;
}
// console.log(isNegativeOrOdd(2))
/**
 * repeats the given string count times
 * repeat('abc',3); -> 'abcabcabc'
 * repeat('*',3); -> '***'
 * repeat('abc',0); -> ''
 */
function repeat(string, count, result = '') {
  return count === 0 ? result : repeat(string, count - 1, result + string);
}
// console.log(repeat('*', 3))

/**
 * returns a string that is the reverse of the inputted string
 * assume only strings are inputted
 * reverseString('hello'); -> 'olleh'
 * reverseString('will'); -> 'lliw'
 */
function reverseString(string) {
  return string.split('').reverse().join('');
}
// console.log(reverseString('hello'))
/**
 * accepts an object and returns an object with key and values switched
 * ex: reverseObject({a:1,b:"c","d":4}); -> {1:a,c:"b",4:"d"}
 */
function reverseObject(object) {
  const result = {};
  const arrOfArrays = Object.entries(object);
  for (const arr of arrOfArrays) {
    result[arr[1]] = arr[0];
  }
  return result;
}
// console.log(reverseObject({a:1,b:"c","d":4}))
/**
 * Returns boolean of whether argument is classified as a Number object
 * isNumber(5); → true
 * isNumber('hi'); → false
 */
function isNumber(value) {
  return typeof value === 'number';
}
// console.log(isNumber('hi'))
/**
 * Returns boolean of whether argument is classified as an Array object
 * isArray(5); → false
 * isArray([1,2,3]); → true
 */
function isArray(value) {
  return Array.isArray(value);
}
// console.log(isArray([5]))
/**
 * Returns boolean of whether argument is classified as an Object
 * isObject(5); → false
 * isObject([1,2,3]); → true
 */
function isObject(value) {
  return typeof value === 'object';
}
// console.log(isObject([1,2,3]))
/**
 * return boolean of whether argument is classified as null
 * isNull(null); -> true
 * isNull(5); -> false
 */
function isNull(value) {
  return value === null;
}
// console.log(isNull(5))

// // Creates a clone of an object.
// let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
//  let shallowClone = clone(users);
//  shallowClone === users// -> false
//  shallowClone[0] === users[0]// → true
// // DO NOT USE THE BUILT-IN Object.assign FUNCTION

function clone(value) {
  return Array.isArray(value) ? [...value] : { ...value };
}
const users = [{ user: 'barney' }, { user: 'fred' }];
const shallowClone = clone(users);
// console.log(shallowClone === users) //-> false
// console.log(shallowClone[0] === users[0]) //→ true
/**
 * Return the size of collection.
 * If the argument passed is an array, then return the length of the array.
 * If the argument passed is an object, then return the number of key/value properties.
 * size([1,2,3]); → 3
 * size({a: 1, b: 2}); → 2
 */
function size(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
// console.log(size([1,2,3])) // → 3
// console.log(size({a: 1, b: 2})) // → 2
/**
 * Gets the index at which the first occurrence of value is found in array
 * Returns -1 if element is not in array
 * DO NOT USE THE BUILT-IN INDEXOF function
 * indexOf([11,22,33], 11); → 0
 * indexOf([11,22,33], 5); → -1
 */
function indexOf(array, value) {
  //iterate over array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
  //if === to value return
}
// console.log(indexOf([11,22,33], 11))// → 0
// console.log(indexOf([11,22,33], 5))
/**
 * Creates a slice of array with n elements dropped from the beginning. n defaults to 1
 * drop([1, 2, 3]); → [2, 3]
 * drop([1, 2, 3], 2); → [3]
 * drop([1, 2, 3], 5); → []
 * drop([1, 2, 3], 0); → [1, 2, 3]
 */
function drop(array, n = 1) {
  return array.slice(n);
}
// console.log(drop([1, 2, 3])) // → [2, 3]
// console.log(drop([1, 2, 3], 2)) // → [3]
// console.log(drop([1, 2, 3], 5)) // → []
// console.log(drop([1, 2, 3], 0)) // → [1, 2, 3]

/**
 * Creates a slice of array with n elements dropped from the end. n defaults to 1
 * dropRight([1, 2, 3])) // → [1, 2]
 * dropRight([1, 2, 3], 2); → [1]
 * dropRight([1, 2, 3], 5); → []
 * dropRight([1, 2, 3], 0); → [1, 2, 3]
 */
function dropRight(array, n = 1) {
  return n > array.length ? [] : array.slice(0, array.length - n);
}
// console.log(dropRight([1, 2, 3])) // → [1, 2])
// console.log(dropRight([1, 2, 3], 2))// → [1]
// console.log(dropRight([1, 2, 3], 5))// → []
// console.log(dropRight([1, 2, 3], 0))// → [1, 2, 3]
/**
 * Creates a slice of array containing n elements taken from the beginning. n defaults to 1
 * take([1, 2, 3]); → [1]
 * take([1, 2, 3], 2); → [1, 2]
 * take([1, 2, 3], 5); → [1, 2, 3]
 * take([1, 2, 3], 0); → []
 */
function take(array, n = 1) {
  return array.slice(0, n);
}
// console.log(take([1, 2, 3])) //; → [1]
// console.log(take([1, 2, 3], 2)) //; → [1, 2]
// console.log(take([1, 2, 3], 5)) //; → [1, 2, 3]
// console.log(take([1, 2, 3], 0)) //; → []
/**
 * Returns an array containing the elements from array1 that are not in array2
 * difference([0,1,2,3,4,5],[3,5]); -> [0,1,2,4]
 */
function difference(array1, array2) {
  return array1.reduce((resultArr, element, i) => {
    if (!array2.includes(element)) resultArr.push(element);
    return resultArr;
  }, []);
}
// console.log(difference([0,1,2,3,4,5],[3,5])) // [0,1,2,4]
/**
 * Iterates over elements of an array invoking callback for each element.
 * The callback should be passed the element, the current index, and the entire array.
 * let callback = function(element, index, array) {
 *   console.log(element + "," + index + "," + array);
 * }
 * forEach(['a','b','c'], callback); → prints a,0,[a,b,c] b,1,[a,b,c] c,2,[a,b,c]
 * For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
 */
function forEach(array, callback) {
  array.map((el, i, a) => callback(el, i, a));
}
// let callback = function(element, index, array) {
//   console.log(element + "," + index + "," + array);
// }
// console.log(forEach(['a','b','c'], callback)) // → prints a,0,[a,b,c] b,1,[a,b,c] c,2,[a,b,c]

/**
 * Iterates over elements of array in reverse invoking callback for each element.
 * The callback should be passed the element, the current index, and the entire array.
 * let callback = function(element, index, array) {
 *   console.log(element + "," + index + "," + array);
 * }
 * forEachRight(['a','b','c'], callback); → prints c,2,[a,b,c] b,1,[a,b,c] a,0,[a,b,c]
 */
function forEachRight(array, callback) {
  const original = array.slice();
  array.reverse().map((element, i, original) => {
    callback(element, array.length - 1 - i, original);
  });
}
// let callback = function (element, index, array) {
//   console.log(element + "," + index + "," + array);
// };
// console.log( forEachRight(['a','b','c'], callback))
/**
 * Creates an array of values by running each element in array through callback
 * The callback should be passed the element, the current index, and the entire array.
 * map([1,2,3], (element, index, array) => {
 *  return element * 3;
 * }); -> [3,6,9]
 * BONUS: use the forEach method you use to create map
 */
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
// console.log(map([1,2,3], (element, index, array) => {
// 	return element * 3;
// })) //-> [3,6,9]

/**
 * Iterates over elements of collection returning an array of all the elements callback returns truthy for.
 * filter([1,2,3,4], (element, index, array) => {
 *  return element % 2 === 0;
 * }); → [2,4]
 * filter({a: 1, b: 2,c: 3,d: 4}, (value, key, collection) => {
 *  return value % 2 !== 0;
 * }); → {a: 1, c: 3}
 */
function filter(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.reduce((resultArr, element, i, a) => {
      if (callback(element, i, a)) resultArr.push(element);
      return resultArr;
    }, []);
  } else if (typeof collection === 'object') {
    return Object.keys(collection).reduce((resultObj, key) => {
      if (callback(collection[key], key, collection)) resultObj[key] = collection[key];
      return resultObj;
    }, {});
  }
}

// console.log(filter([1,2,3,4], (element, index, array) => {
//  return element % 2 === 0;
// }))// → [2,4]

// console.log(filter({a: 1, b: 2,c: 3,d: 4}, (value, key, collection) => {
//  return value % 2 !== 0;
// })) // {a: 1, c: 3}

/**
 * Removes all elements from array that callback returns truthy for and returns an array of the remaining elements.
 * reject([1,2,3,4], (element, index, collection) => {
 *  return element % 2 === 0;
 * }); → [1,3]
 * reject({a:1, b:2, c:3, d:4}, (value, key, collection) => {
 *  return value % 2 !== 0;
 * }); → {b:2, d:4}
 * Challenge: use filter
 */
function reject(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.filter((el, i) => !callback(el, i, collection));
  } else {
    return Object.keys(collection).reduce((acc, key) => {
      if (!callback(collection[key], key, collection)) acc[key] = collection[key];
      return acc;
    }, {});
  }
}
// console.log(reject([1,2,3,4], (element, index, collection) => {
//  return element % 2 === 0;
// })) //; → [1,3]
// console.log(reject({a:1, b:2, c:3, d:4}, (value, key, collection) => {
//  return value % 2 !== 0;
// })) //; → {b:2, d:4}

/**
 * Creates an array without duplicate values. The order of the array is preserved.
 * uniq([1,2,1]); → [1,2]
 */
function uniq(array) {
  const resultArr = [];
  array.forEach(element => {
    if (!resultArr.includes(element)) resultArr.push(element);
  });
  return resultArr;
}
// console.log(uniq([1, 2, 1]));
/**
 * Gets the value of key from all elements in collection.
 * pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
 */
function pluck(array, key) {
  const result = [];
  for (const obj of array) {
    result.push(obj[key]);
  }
  return result;
}
// console.log(
//   pluck(
//     [
//       { user: "Bob", age: 20 },
//       { user: "Sam", age: 25 },
//     ],
//     "user"
//   )
// ); //→ ['Bob','Sam'])

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 * trim('   hello world '); -> 'hello world'
 */
function trim(string) {
  return string.trim();
}
// console.log(trim(' hello '))// -> 'hello'
// console.log(trim('   hello world '))
/**
 * Reduces collection to a value which is the accumulated result of running each
 * element in collection through iteratee, where each successive invocation is
 * supplied the return value of the previous. If accumulator is not provided the
 * first element of collection is used as the initial value.
 * If a start parameter is not provided, then set the start value as the zeroth index
 * reduce([1,2], (stored,current) => {
 *  return stored + current;
 * }); → 3
 * reduce([1,2], (stored,current) => {
 *  return stored + current;
 * },1); → 4
 */
function reduce(array, callback, start) {
  let result;
  for (const el of array) {
    if (start === undefined) {
      start = array[0];
      result = array[0];
      continue;
    }
    result = callback(result === undefined ? start : result, el);
  }
  return result;
}
// console.log(reduce([1,2], (stored,current) => {
//  return stored + current;
// })) //; → 3
// console.log(reduce([1,2], (stored,current) => {
//  return stored + current;
// },1)) //; → 4

/**
 * Flattens a nested array (one level deep).
 * flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
 */

function flatten(array) {
  // result arr
  const resultArr = [];
  //iterate through array
  array.forEach(element => {
    //else if array loop through val and push to result
    if (Array.isArray(element)) {
      resultArr.push(...element);
    }
    //if not array, push to result arr
    else resultArr.push(element);
  });
  //return result
  return resultArr;
}
// console.log(flatten([1, [2, 3, [4]]]))

// // Recursively flattens a nested array.
//  flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]

function flattenDeep(array) {
  // result arr
  const resultArr = [];
  //iterate through array
  array.forEach(element => {
    //else if array loop through val and push to result
    if (Array.isArray(element)) {
      resultArr.push(...flattenDeep(element));
    }
    //if not array, push to result arr
    else resultArr.push(element);
  });
  // return result
  return resultArr;
}
// console.log(flattenDeep([1, [2, 3, [4]]])) // → [1, 2, 3, 4]

/**
 * Assigns own enumerable properties of source object(s) to the destination object
 * Subsequent sources overwrite property assignments of previous sources.
 * extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
 * BONUS: solve with reduce
 */
function extend(...args) {
  return args.reduce((resultObj, obj) => {
    for (const key in obj) {
      resultObj[key] = obj[key];
    }
    return resultObj;
  }, {});
  // blah
  // another blah
  // a third blah
}

// console.log(extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' })) //→ { 'user': 'fred', 'age': 40 }
/**
 * Returns boolean of whether argument is classified as a String object
 * isString('hi'); → true
 * isString(5); → false
 */
function isString(value) {
  return typeof value === 'string';
}
// console.log(isString('hi')) //; → true
// console.log(isString(5)) //; → false

/**
 * Creates a deep clone of value.
 * let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * let deepClone = cloneDeep(users)
 * deepClone === users → false
 * deepClone[0] === users[0] → false
 * deepClone[0].user === users[0].user → true
 */
function cloneDeep(value) {
  // return value.slice();
}
const users1 = [{ user: 'barney' }, { user: 'fred' }];
const deepClone = cloneDeep(users1);
// console.log(deepClone === users1); //→ false
// console.log(deepClone[0] === users1[0]); // → false
// console.log(deepClone[0].user === users1[0].user); //→ true
/**
 * Using a for loop, call the functions in the queue in order with the input number, where the results of each function become the next function’s input. Additionally, the queue should be empty after the function is called.
 * let puzzlers = [
 *   function(a) { return 8 * a - 10; },
 *   function(a) { return (a - 3) * (a - 3) * (a - 3); },
 *   function(a) { return a * a + 4;},
 *   function(a) { return a % 5;}
 * ];
 * let start = 2;
 * applyAndEmpty(2, puzzlers); → 3
 */
function applyAndEmpty(input, queue) {
  // iterate through the array of functions
  for (const cb of queue) {
    // reassign the value of input to the evaluaed outcome of the queue at index i with input passed
    input = cb(input);
  }
  return input;
}

const puzzlers = [
  function (a) {
    return 8 * a - 10;
  },
  function (a) {
    return (a - 3) * (a - 3) * (a - 3);
  },
  function (a) {
    return a * a + 4;
  },
  function (a) {
    return a % 5;
  },
];
const start = 2;
// console.log(applyAndEmpty(2, puzzlers)) // 3

/**
 * Returns a function that is restricted to invoking func once.
 * Repeat calls to the function return the value of the first call.
 */
function once(func) {
  let called = false;
  let firstResult;
  //return fxn
  return function (arg) {
    if (!called) {
      called = true;
      firstResult = func(arg);
    }
    return firstResult;
  };
}

const numByTwo = num => num * 2;
const once2 = once(numByTwo);
// console.log(once2(10))
// console.log(once2(20))

/**
 * Returns a function that when called, will check if it has already computed
 * the result for the given argument and return that value instead if possible.
 */
function memoize(func) {
  const cache = {};
  return arg => {
    // check if the argument and function pair exists in the cache
    // if so, return the value of key/value pair
    if (cache[arg]) return cache[arg];
    // if not, store the argument as our key on the cache object and the result of argument passed into func as our value
    cache[arg] = func(arg);
    // return the result of argument passed into func as our value
    return cache[arg];
  };
}
const testObj = { age: 10 };
const memoized = memoize(testObj => {
  return testObj.age * 2;
});
// console.log(memoized(testObj))
// console.log(memoized(testObj))
/**
 * Invokes func after wait milliseconds.
 * Any additional arguments are provided to func when it is invoked.
 */
function delay(func, wait) {}

/**
 * Returns a function that only invokes func once per every wait milliseconds
 * (additional calls to func within the wait should not be invoked or queued).
 */
function throttle(func, wait) {}

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through iteratee.
 *
 * sortBy([1, 2, 3], function(n) {
 *   return Math.sin(n);
 * }); → [3, 1, 2]
 * let users = [
 *   { 'user': 'fred' },
 *   { 'user': 'pebbles' },
 *   { 'user': 'barney' }
 * ];
 * pluck(sortBy(users, 'user'), 'user'); → ['barney', 'fred', 'pebbles']
 */
function sortBy(array, iterator) {}

/**
 * Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step
 * start defaults to 0, step defaults to 1
 * If you'd like a negative range, use a negative step.
 * range(10); -> [0,1,2,3,4,5,6,7,8,9]
 * range(1,11); -> [1,2,3,4,5,6,7,8,9,10]
 * range(0,30,5); -> [0,5,10,15,20,25]
 * range(0,-10,-1); -> [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
 */
function range(start, stop, step) {}

/**
 * split array into two array based on those elements who satisfies the predicate (callback)
 * partition([0,1,2,3,4,5,6], function(element) {
 *   return element % 2 === 0;
 * }); -> [[0,2,4,6],[1,3,5]];
 * BONUS: Use two lodash functions that you created in this unit
 */
function partition(array, predicate) {}

/**
 * Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); -> [1,2]
 */
function intersection() {}

/**
 * Returns an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * zip(['fred', 'barney'], [30, 40], [true, false]); → [['fred', 30, true], ['barney', 40, false]]
 */
function zip() {}
/**
 * returns a function that will only be run after first being called count times
 * let called = function() { console.log('hello') };
 * let afterCalled = after(3, called);
 * afterCalled(); -> nothing is printed
 * afterCalled(); -> nothing is printed
 * afterCalled(); -> 'hello is printed'
 * afterCalled(); -> 'hello is printed'
 */
function after(count, func) {}

/**
 * Returns a function that can be called no more than count times.
 * The result of the last function call is memoized and returned when count has been reached
 * let count = 0;
 * let printAndIncrementCount = function() { console.log(count++) };
 * let beforePrintAndIncrementCount = before(2,printAndIncrementCount);
 * beforePrintAndIncrementCount(); prints 0
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 */
function before(count, func) {}

/**
 * Write a function that creates arrays. The first argument is the length. The second
 * is a callback. The return value of this callback will become the array element. Call
 * the callback with the array index as an argument.
 * let square = function(n) { return n * n; };
 * arrayFactory(4, square); -> [0, 1, 4, 9]
 * Remember the zero-based index for arrays. 3 Was passed as the last argument for an array of length 4.
 */
function arrayFactory(length, processor) {}
