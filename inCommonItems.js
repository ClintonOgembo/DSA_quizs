// Using Object
function itemInCommon(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true;
    }
    return false;
}

// Using Hash Map
function itemsInCommon(array1, array2) {
    let myMap = new Map();
    for (let i of array1) {
        myMap.set(i, true);
    }
    for (let j of array2) {
        if (myMap.has(j)) return true;
    }
    return false;
}
