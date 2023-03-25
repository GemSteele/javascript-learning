var divideArray = function (nums) {
    if (nums.length & 1)
        return false;
    nums.sort();
    for (let i = 0; i < nums.length;) {
        if (nums[i++] !== nums[i++])
            return false;
    }
    return true;

};

let arr = [1, 2, 4, 65, 24, 21, 43];
let ba = [1, 1, 2, 2, 5, 6, 5, 5]
arr.sort();
console.log(divideArray(ba))