function isEven(n) {
    if (0 === n)
        return true;
    else if (1 === n)
        return false;
    else
        return isEven(n - 2)
}

console.time("isEven");
let num;
do {

    num = Number(prompt("Enter a number"))

} while (!num);

// const e = document.createElement("p");

// const str = isEven(num) ? "It's an even" : "It's a odd";

// e.innerText = str;

// document.body.appendChild(e)

console.assert(isEven(num), "%O", { message: "It's a odd" })

console.timeEnd("isEven");