function getNumberArray(n) {
    return Array.from({ length: n }, (_, i) => i);
}

let number;

do {
    number = Number(prompt("enter a number"));
} while (!number)

const nums = getNumberArray(number);

const str = nums
    .map(i => getNumberArray(number))
    .map((v, k) => {
        return v.map(x => {
            if (1 & (x + k)) {
                return "#"
            }
            else
                return " "
        }).join("");
    }).join("\n");

let myElm = document.createElement("p");	// Create a new element


myElm.innerText = str;		// Change the text of the element
myElm.style.color = 'red';		// Change the text color of the element

document.body.appendChild(myElm);	// Add the object to the DOM

console.log(str)
