let str = "AB";

const base = 64;

const multiple = 26;

let arr = [...str].reverse();

// console.log("A".charCodeAt(0) - 64)

// const sum =
//     arr.map((char, index) => {
//         return (char.charCodeAt(0) - base) * (multiple ** index);
//     })
//         .reduce((a, b) => a + b);

const sum = arr.reduce((a, b, index) => (a + (b.charCodeAt(0) - base) * (multiple ** index)), 0)

console.log(sum)