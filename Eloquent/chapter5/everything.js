function every1(arr, test) {
    for (let i of arr) {
        if (!test(i))
            return false;
    }
    return true;
}

function every2(arr, test) {
    return !arr.some(e => !test(e))
}


// console.log(every1([1, 3, 5], n => n < 10));
// // → true
// console.log(every1([2, 4, 16], n => n < 10));
// // → false
// console.log(every1([], n => n < 10));
// → true
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));