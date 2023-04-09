function loop(value, test, update, body) {
    let count = value;
    while (test(count)) {
        body(count);
        count = update(value);
    }

}