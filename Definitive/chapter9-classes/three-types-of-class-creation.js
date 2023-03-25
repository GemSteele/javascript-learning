catproto = {
    color: this.species,
    voice() {
        console.log("miao~")
    },

    action() {
        console.log("jump to a tree")
    }
}
// 1
function cat(species, age, isMale) {

    let c = Object.create(catproto)

    c.species = species;
    c.age = age;
    c.isMale = isMale;

    return c;

};

function Dog(species, age, isMale) {
    this.species = species;
    this.age = age;
    this.isMale = isMale;
}

Dog.prototype = {
    color: this.species,
    voice() {
        console.log("wan~")
    },

    action() {
        console.log("swim in a pool")
    }
}


class People {
    constructor(species, age, isMale) {
        this.species = species;
        this.age = age;
        this.isMale = isMale;
        this.color = this.species
    }

    voice() {
        console.log("hahaha~")
    }

    action() {
        console.log("drive a car")
    }
}

let a = cat("black", 1, true);
a.voice()
a.action()
console.log(a.species)
console.log(a.color)

let b = new Dog("yello", 2, false);
b.voice()
b.action()
console.log(b.species)
console.log(b.color)

let c = new People("white", 17, false);
c.voice()
c.action()
console.log(c.species)
console.log(c.color)
