function runningSum(nums) {

    // let s = [];

    // for ([index, n] of Object.entries(nums)) {

    //     let x = 0;
    //     let newNum = 0;
    //     while (x <= index) {
    //         newNum += nums[x];
    //         x++
    //     }
    //     s.push(newNum);

    // }



    let s = [];
    let count = 0;

    for (n of nums) {

        count += n;
        s.push(count);

    }

    return s;
}

console.log(runningSum([1, 2, 3, 4]));