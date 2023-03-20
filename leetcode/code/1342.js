let num = 14;

// 1st
// let s = num.toString(2);
// console.log(s)
// // let arr = [...s]
// // console.log(arr.reverse())

// const length = s.length;
// let times = s.split("1").length
// console.log(length + times - 2)


// 2nd
let count = 0;
while (num) {
    if (num & 1) {
        num--;
    } else {
        num = num >> 1;
    };
    count++;
    console.log(count)
}
console.log(count)