function isPrime(n) {

    if (isPrime[n] !== undefined)
        return isPrime[n];

    if (n === 1)
        return false;


    if (n === 2 || n === 3)
        return true;



    for (let i = 2; i <= n >> 1; i++) {

        if (n % i === 0)
            return isPrime[n] = false;

    }
    return isPrime[n] = true;

}

// console.log(isPrime(4));
// console.log(isPrime(10))