let map = {
    one: true, two: true,
    hasOwnProperty: true
};
let o = {};
console.log(o.hasOwnProperty.call(map, "hasOwnProperty"))

// refine =>
console.log(Object.hasOwnProperty.call(map, "one"));
console.log(Object.hasOwnProperty(map, "one"));
console.log(Object.prototype.hasOwnProperty.call(map, "two"))
console.log(Object.prototype.hasOwnProperty(map, "two"))

/**
 * It seems confusing,right?
 * 
 * The real thing here is that: You just need a object instance,no matter what.
 * use it to call()!
 * 
 * so,Object.prototype,Object,o...they're all some kind of a object!
 * 
 * That's it!
 * 
 * so when there is a call(),it changed the "this",which is right we want.
 * But if not ,they are themselves!
 */

