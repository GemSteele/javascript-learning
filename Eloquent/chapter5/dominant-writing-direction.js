import SCRIPTS from "./script.js"


function characterScript(code) {
    return SCRIPTS.find(s => s.ranges.some(([from, to]) => {
        return code >= from && code <= to;
    }));
}

// groupTest(item)  => return a string as group identifier
export function countBy(items, groupTest) {
    return items.map(e =>
        groupTest(e))
        .reduce((m, n) => {
            if (m.has(n))
                m.set(n, m.get(n) + 1);
            else
                m.set(n, 1)
            return m;
        }, new Map())
}

// console.log(characterScript(121).name);
// console.log(countBy([1, 2, 3, 4, 5,], n => n > 2));


// console.log(countBy([...'英国的狗说"woof", 俄罗斯的狗说"тяв"'], e => characterScript(e.codePointAt(0))?.name || "punctuation"));
// console.log(countBy([...'英国的狗说"woof", 俄罗斯的狗说"тяв"'], e => characterScript(e.codePointAt(0))?.direction || "punctuation"));