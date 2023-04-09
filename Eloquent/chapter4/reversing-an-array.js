function reverseArray(arr) {
    let l = arr.length;
    let newArr = { length: l };
    arr.forEach((n, i) => newArr[l - i - 1] = n);
    return newArr;
}

function reverseArray2(arr) {

    let newArr = []
    arr.forEach(i => newArr.unshift(i));
    return newArr;
}

function reverseArrayInPlace(arr) {
    let l = arr.length;
    for (let i = 0; i < l >> 1; i++) {
        [arr[i], arr[l - i - 1]] = [arr[l - i - 1], arr[i]]
    }
}

let nums1 = nums2 = Array.from({ length: 10 }, (_, i) => i + 1);

console.time("num1")
console.log(nums1)
console.log(Array.from(reverseArray(nums1)))
console.log(nums1)
console.timeEnd("num1")

console.time("nums1")
console.log(nums1)
console.log(reverseArray2(nums1))
console.log(nums1)
console.timeEnd("nums1")


console.time("nums2")
console.log(nums2)
console.log(reverseArrayInPlace(nums2))
console.log(nums2)
console.timeEnd("nums2")

// let arr = []
// console.time("a");
// let a = 1 + 1;
// console.timeEnd("a")

// console.time("b");
// for (let b = 0; b < 10000; b++) {
//     arr[b] = b + 1
// }
// console.timeEnd("b")