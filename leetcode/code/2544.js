let n = 123;
n = n.toString();

// let sum = 0;
// for (let i = 0; i < n.length; i++) {
//     console.log(n[i]);
//     if (i % 2 === 0) {
//         sum += +n[i];
//         console.log(sum)
//     } else {
//         sum -= +n[i];
//         console.log(sum)
//     }

// };

// console.log(sum)
let arr = n.split("");
// console.log(typeof arr);

// console.log(Array.isArray(arr));

// console.log(arr);

// let arrNum = arr.map((a, index) => {
//     if (index % 2 !== 0)
//         return -(+a);
//     return +a;
// });

// console.log(arrNum);

// let sum = arrNum.reduce((a, b) => a + b);
// console.log(sum)


let sum = arr.map((a, index) => {
    if (index % 2 !== 0)
        return -a;
    return +a;
}).reduce((a, b) => a + b);

console.log(sum)