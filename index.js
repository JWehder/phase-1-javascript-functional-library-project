
function myEach (collection, callback) {
   let newCollection = [];
   if (typeof(collection) === 'object') {
        newCollection = Object.values(collection);
   } else {
        newCollection = [...collection];
   }
   for (const element of newCollection) {
        callback(element);
   } 
   return collection
}   

function myMap(collection, callback) {
    // transforms each element of an array and returns a new array
    // the only thing that changes from foreach is adding the new array
    let newCollection = [];
    if (typeof(collection) === 'object') {
         newCollection = Object.values(collection);
    } else {
         newCollection = [...collection];
    }
    for (let i = 0; i < newCollection.length; i++) {
        // I used this for loop because it keeps track of the iterations
        newCollection[i] = callback(newCollection[i])
    } 
    return newCollection
}

function myReduce (collection, callback, acc) {
    let newCollection = [];
    if (typeof(collection) === 'object') {
        newCollection = Object.values(collection);
    } else {
        newCollection = [...collection];
    }
    if (acc === undefined) {
        acc = newCollection[0];
        newCollection.shift();
    }
    for (let i = 0; i < newCollection.length; i++) {
        let value = newCollection[i];
        acc = callback(acc, value, collection);
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection = [];
    if (typeof(collection) === 'object') {
         newCollection = Object.values(collection);
    } else {
         newCollection = [...collection];
    }
    for (let i = 0; i < newCollection.length; i++) {
        let value = predicate(newCollection[i])
        if (value === true){
            return newCollection[i]
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = [];
    if (typeof(collection) === 'object') {
         newCollection = Object.values(collection);
    } else {
         newCollection = [...collection];
    }
    // same type of function but return all values into an array\
    let anotherCollection = []
    for (let i = 0; i < newCollection.length; i++) {
        let value = predicate(newCollection[i])
        // it's reducing the array but i continues to rise
        if (value === true){
            anotherCollection.push(newCollection[i])
        }
    }
    return anotherCollection
}

function mySize(collection) {
    let newCollection = [];
    if (typeof(collection) === 'object') {
         newCollection = Object.values(collection);
    } else {
         newCollection = [...collection];
    }
    return newCollection.length
} 

function myFirst(array, n) {
    // find first element of an array
    // conditional statement to check if an integer was defined
    if (n === undefined) {
    // grab the first element. How do I do that?
        return array[0]
    } else {
        let returnArray = array.splice(0, n)
        return returnArray
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]
    } else {
        let returnArray = array.splice((array.length) - n, n);
        console.log(returnArray)
        return returnArray
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}