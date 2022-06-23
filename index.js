function typeFinder(collection) {
    if (collection instanceof Array) {
        return collection.slice()
            //return copy [...collection]
    } else {
        return Object.values(collection)
            //converts an objects values to an array
    }
}


function myEach(collection, alert) {
    let typeSearch = typeFinder(collection)

    for (const element of typeSearch) {
        alert(element)

    }

    return collection
};



const myMap = (collection, callback) => {
    let typeSearch = typeFinder(collection)

    let updatedMap = []
    for (const item of typeSearch) {
        updatedMap.push(callback(item))
    }
    return updatedMap

}
myMap(collection, callback)


function myReduce(collection, callback, accumulate) {
    let typeSearch = typeFinder(collection)

    if (accumulate) {
        let i = 0;

    } else {
        let i = 1;

        accumulate = collection[0]
    }
    for (i; i < collection.length; i++) {
        callback(typeSearch)
        return typeSearch

    }
}


//return a single value



function myFind(collection, predicate) {
    let typeSearch = typeFinder(collection)

    for (const item of typeSearch) {
        if (item.value === 1) {
            return item.value;

        } else {
            return undefined
        }
    }

}



function myFilter(collection, predicate) {
    let typeSearch = typeFinder(collection)

    for (const item of typeSearch) {
        if (item.value) {
            return item.value;
        } else {
            return [];
        }
    }

}


function mySize(collection) {
    let typeSearch = typeFinder(collection)

    return typeSearch.length
}

function myFirst(collection, n) {
    let typeSearch = typeFinder(collection)
        // array.slice( where_to_start_deleting, array.length )

    let sliced = parseInt(typeSearch.slice(0, n));


    return sliced
}

// const myFirst = function(arr, stop=false) {
//     return (stop) ? arr.slice(0, stop) : arr[0];
//   }

function myLast(collection, n) {
    let typeSearch = typeFinder(collection)

    let nReturn = parseInt(typeSearch.slice(3, typeSearch.length))

    return nReturn;
}

function myKeys(collection) {
    let typeSearch = typeFinder(collection)

    return Object.keys(collection)
}

function myValues(collection) {
    let typeSearch = typeFinder(collection)

    return Object.values(collection)
}