class People {
    constructor(species, age, isMale) {
        this.species = species;
        this.age = age;
        this.isMale = isMale;
        this.color = this.species
    }

    static realm() {
        console.log("build a country")
    }
    voice() {
        console.log("hahaha~")
    }

    action() {
        console.log("drive a car")
    }
}

let c = new People("white", 17, false);
c.voice()
c.action()
console.log(c.species)
console.log(c.color)
People.realm()

console.log(c.prototype)
console.log(c._proto_)
console.log(People.prototype)
console.log(People.prototype.constructor)
console.log(People.prototype.constructor.prototype)
