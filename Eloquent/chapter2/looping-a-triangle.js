function getNumberArray(n) {
    return Array.from({ length: n }, (_, i) => i);
}

let number;

do {
    number = Number(prompt("enter a number"));
} while (!number)

let myElm = document.createElement("p");	// Create a new element

const str = getNumberArray(number).map(i => "#".repeat(i + 1)).join("\n");
myElm.innerText = str;		// Change the text of the element
myElm.style.color = 'red';		// Change the text color of the element

document.body.appendChild(myElm);	// Add the object to the DOM