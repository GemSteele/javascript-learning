function countBs(str) {
    // let x = str.split("").map(i => i.codePointAt(0))
    //     .filter(i => i === "B".codePointAt(0))
    //     .reduce((a, b) => a + 1, 0)
    // return x;
    return [...str].filter(i => i === "B").length;
}


function countChar(str, c) {
    return [...str].filter(i => i === c).length;
}

let str;

do {
    str = prompt("enter a striing");
} while (!str)


console.log(countBs(str))
console.log(countChar(str, "b"))

// str.split("").map(i => i).forEach(i => console.log(i))
