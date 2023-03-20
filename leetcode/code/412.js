var fizzBuzz = function (n) {
    return wrap()(n);
};

function wrap() {
    let store = [];
    return function (n) {
        if (n > store.length) {
            for (let i = store.length + 1; i <= n; i++) {
                if (i % 15 === 0) {
                    store.push("FizzBuzz");
                    continue;
                }
                if (i % 3 === 0) {
                    store.push("Fizz");
                    continue;
                }
                if (i % 5 === 0) {
                    store.push("Buzz")
                    continue;
                }
                store.push(i.toString())
            }
            return store;
        }
        return store.slice(0, n - 1)
    }
}

console.log(wrap()(15));

// var fizzBuzz = function(n) {
//     return Array.from({length: n}, (_, i) => {
//         i += 1;
//         return i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz'
//             : i % 3 === 0 ? 'Fizz' 
//             : i % 5 === 0 ? 'Buzz'
//             : `${i}`;
//     });
// };