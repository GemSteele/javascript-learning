class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    minus(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    toString() {
        return `x : ${this.x}  y : ${this.y}`
    }
}

let tri = new Vector(3, 4);
let sq = new Vector(1, 1);
console.log(tri, sq)