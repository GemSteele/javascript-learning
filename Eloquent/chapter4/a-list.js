function arrayToList(arr) {
    let list = {};
    if (arr.length === 1)
        return {
            value: arr[0],
            rest: null
        }
    return {
        value: arr[0],
        rest: arrayToList(arr.slice(1))
    }
}

function listToArray(list) {
    let arr = [];

    // while (null !== list.rest) {
    //     arr.push(list.value);
    //     list = list.rest;
    // }

    // arr.push(list.value);

    do {
        arr.push(list.value);
        list = list.rest;
    } while (list)

    return arr;
}

function prepend(e, list) {
    return {
        value: e,
        rest: list
    }
}

function nth(list, num) {
    if (num === 0)
        return list.value;
    if (!list.rest)
        return undefined
    return nth(list.rest, num - 1)

}

function nthx(list, num) {

    while (num) {
        if (!list.rest)
            return undefined;
        num--;
        list = list.rest;
    }
    return list.value;

}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let list = arrayToList(arr);
console.log(list)
let newArr = listToArray(list);
console.log(newArr)
let list1 = prepend(0, list);
console.log(listToArray(list1))
console.log(nth(list, 2))
console.log(nth(list1, 9))
console.log(nthx(list, 0))
console.log(nthx(list1, 0))