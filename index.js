function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key]);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i]));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key]));
            }
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = values[0];
        values = values.slice(1);
    }
    for (let value of values) {
        acc = callback(acc, value, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            result.push(collection[key]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
