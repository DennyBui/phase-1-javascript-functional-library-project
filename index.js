myEach([1, 2, 3, 4], alert);
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    const newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
    }
    return newArray;
  }

myMap([1, 2, 3, 4], function(num){return num * 3});

function myReduce(collection, callback, acc) {
  let keys = Object.keys(collection);
  let start = 0;
  if (acc === undefined) {
    acc = collection[keys[0]];
    start = 1;
  }
  for (let i = start; i < keys.length; i++) {
    acc = callback(acc, collection[keys[i]], collection)
  }
  return acc;
}
myReduce({one: 1, two: 2, three: 3}, function(acc, val) { return acc + val;}, 0);

function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0;});

function myFilter(collection, predicate) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            result.push(collection[i]);
        }
    }
    return result;
}
myFilter([1, 2, 3, 4, 5, 6], function(num) {return num % 2 === 0});

function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
mySize({one: 1, two: 2, three: 3})

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
myFirst([5, 4, 3, 2, 1]);

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
myLast([5, 4, 3, 2, 1]);

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key)
        }
    }
    return keys;
}
myKeys({one: 1, two: 2, three: 3});

function myValues(object) {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}