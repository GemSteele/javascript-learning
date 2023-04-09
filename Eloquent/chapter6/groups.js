import { countBy } from "../chapter5/dominant-writing-direction.js";

class Group {
    constructor() {
        this.group = []
    }

    has(e) {
        return this.group.includes(e);
    }
    add(e) {
        if (this.has(e))
            return false;
        return this.group.push(e);
    }

    delete(e) {
        if (!this.has(e))
            return false;
        this.group = this.group.filter(i => i !== e);

    }

    toString() {
        return this.group.map(i => i.toString()).join(",");
    }

    static from(iterable) {
        let result = new Group();
        let mapSet = countBy(iterable, i => i);
        for (let x of mapSet.keys()) {
            result.add(x);
        }
        // for (let d of iterable) {
        //     result.add(d);
        // }

        // console.log(result.group instanceof Array, "tag")
        return result;
    }

    [Symbol.iterator]() {

        let count = 0;

        return {
            // Atention! must use Arrow function here!!!
            next: () => {

                return (count < this.group.length) ? { value: this.group[count++] } : { done: true }


            },

            [Symbol.iterator]() { return this }
        }
    }



}

let a = new Group();
a.add("2");
a.add("2");
a.add("2");
a.add("3");
console.log(a.toString())
a.delete("2")
console.log(a.toString())
let g = Group.from([1, 1, 3, 3, 6, 6]);
console.log(g.toString())

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}