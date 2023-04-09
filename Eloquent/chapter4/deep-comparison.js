function deepEqual(o1, o2) {
    if (o1 || o2)
        return false;
    for (let [k, v] of Object.entries(o1)) {
        if (o2[k] !== v)
            return false;
    }
    return true;
}