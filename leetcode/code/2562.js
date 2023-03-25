var findTheArrayConcVal = function (nums) {

    let concatenation = 0;
    let l = nums.length;
    if (l & 1)
        concatenation += nums[l >> 1]

    for (let i = 0; i < l >> 1; i++) {
        concatenation += +(nums.shift() + "" + nums.pop())
    }

    return concatenation;
}

console.log(findTheArrayConcVal([7, 52, 2, 4]))