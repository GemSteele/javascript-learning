var maximumWealth = function (accounts) {
    return accounts.map(costomer =>
        costomer.reduce((a, b) => a + b))
        .reduce((a, b) => {
            if (b > a)
                return b;
            return a;
        }, 0)
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));