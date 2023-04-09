function coorelate([a, b, c, d]) {
    return (a * d - b * c) / Math.sqrt((a + b) * (a + c) * (b + d) * (c + d))
};

// console.log(coorelate([76, 9, 4, 1]))

function coefficient(event, originalData) {
    let result = [];
    originalData.forEach(entry => {
        let index = 0;
        if (entry.events.includes(event))
            index++;
        if (entry.squirrel)
            index += 2
        result[index]++;
    })

    return result;
}