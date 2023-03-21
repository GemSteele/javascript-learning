// var middleNode = function (head) {
//     return Array.prototype.slice.call(head, (head.length >> 1));
// };

// let a = { "0": "a", "1": "b", "2": "c", length: 3 };

// let b = middleNode(a);
// console.log(b);

// console.log(typeof a)
// console.log(typeof b)
// console.log(Array.isArray(b));


// let target = {};
// let index = a.length >> 1;
// target.length = (a.length & 1) ? (a.length >> 1) + 1 : (a.length >> 1);
// for (let e of b) {
//     console.log(e)
//     target[index] = e;
//     index++;
// };
// console.log(target)

// var middleNode = function (head) {

//     let b = Array.prototype.slice.call(head, (head.length >> 1));

//     let target = {};
//     let index = head.length >> 1;
//     target.length = (head.length & 1) ? (head.length >> 1) + 1 : (head.length >> 1);
//     for (let e of b) {
//         console.log(e)
//         target[index] = e;
//         index++;
//     };
//     return target;
// };

// console.log(middleNode(a));


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var middleNode = function (head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;


};