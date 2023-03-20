


// let store = [1, 4, 9]
// var isPerfectSquare = function (num) {

//     for (i of store) {
//         if (i === num)
//             return true;
//     }
//     let count = store.length;
//     if (num < store[count - 1])
//         return false;

//     let newPerfect = (count + 1) ** 2
//     while (num > newPerfect) {
//         store.push(newPerfect);
//         count++;
//         newPerfect = (count + 1) ** 2;
//     }
//     if (num === newPerfect)
//         return true;
//     return false;

// }



// console.log(isPerfectSquare(4))
// console.log(isPerfectSquare(8))
// console.log(isPerfectSquare(9))
// console.log(isPerfectSquare(16))
// console.log(isPerfectSquare(15))
// console.log(isPerfectSquare(100))


function wrap() {

    let store = [1, 4, 9]

    return function (num) {

        for (i of store) {
            if (i === num)
                return true;
        }
        let count = store.length;
        if (num < store[count - 1])
            return false;

        let newPerfect = (count + 1) ** 2
        while (num > newPerfect) {
            store.push(newPerfect);
            count++;
            newPerfect = (count + 1) ** 2;
        }
        if (num === newPerfect)
            return true;
        return false;

    }

}

console.log(wrap()(7));
console.log(wrap()(9));
console.log(wrap()(18));



// let store = [1, 4, 9]

// var isPerfectSquare = function (num) {

//     for (i of store) {
//         if (i === num)
//             return true;
//     }
//     let count = store.length;
//     if (num < store[count - 1])
//         return false;

//     let newPerfect = (count + 1) ** 2
//     while (num > newPerfect) {
//         store.push(newPerfect);
//         count++;
//         newPerfect = (count + 1) ** 2;
//     }
//     if (num === newPerfect)
//         return true;
//     return false;

// }