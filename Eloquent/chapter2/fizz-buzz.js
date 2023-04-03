const arr = Array.from({ length: 100 }, (_, i) => i + 1);

const fb = arr.map(i => {
    if (i % 15 === 0)
        return "FizzBuzz";
    if (i % 3 === 0)
        return "Fizz"
    if (i % 5 === 0)
        return "Buzz"
}).filter(e => e)
console.log(fb)