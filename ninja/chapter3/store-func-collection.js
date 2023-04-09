let store = {
    nextId: 1,
    cache: {},
    add(f) {
        if (!f.id) {
            f.id = this.nextId++;
            this.cache[f.id] = f;
            return true;
        }
    }
}

function test1() {
    console.log("first")
}
function test2() {
    console.log("second")
}
function test3() {
    console.log("third")
}

