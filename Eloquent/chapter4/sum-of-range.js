function range(start, end, step) {
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => i * step + start);
}

function sum(arr) {
    return arr.reduce((a, b) => a + b)
}


console.log(range(5, 2, -1))
console.log(range(1, 10, 2))
console.log(sum(range(1, 10, 2)))