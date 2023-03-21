// var canConstruct = function (ransomNote, magazine) {
// let a = [...ransomNote].sort();
// let b = [...magazine].sort();
// for (let [index, letter] of Object.entries(a)) {
//     console.log(letter, index, b[index])
//     if (letter !== b[index])
//         return false;
// }
// return true;

//     let a = [...ransomNote]
//     let b = [...magazine]
//     let aCounter = {}
//     let bCounter = {}
//     for (let letter of a) {
//         if (!aCounter[letter])
//             aCounter[letter] = 1;
//         else
//             aCounter[letter]++;
//     }

//     console.log(aCounter)
//     for (let letter of b) {
//         if (!bCounter[letter])
//             bCounter[letter] = 1;
//         else
//             bCounter[letter]++;
//     }
//     console.log(bCounter)
//     for (let k of Object.keys(aCounter)) {

//         if (!bCounter[k] || aCounter[k] > bCounter[k])
//             return false;
//     }
//     return true;
// };

// let a = "a";
// let b = "b"
// console.log(canConstruct(a, b))

//could not use for/of
var canConstruct = function (r, m) {

    r = [...r]
    m = [...m]
    outer: for (let e of r) {

        for (let [k, v] of Object.entries(m)) {

            if (v == e) {

                m.splice(k, 1);

                continue outer;
            }

        }
        return false;
    }
    return true;

}

// it fine
var canConstruct = function (r, m) {
    let count = 0
    r = r.split("")
    m = m.split("")
    outer: for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (r[i] === m[j]) {
                m.splice(j, 1);
                count++;
                continue outer;
            }
        }
        return false;

    }
    return true;



};

console.log(canConstruct("dcidcjgibfadhjibjjihiffibcccajaieegficfehcajcfcahjjdaiggdeabffbcbbiafiejgcifbjgffgjgebhaadeifdbdggefjejeabiefgjajihfdbdeifhcijbiidhgeahchgadjaeijfiiicfgbiecajjjbeibicdhfjfiahchdfagafhgdaafccaegebfjdceccachiiiihiceeiicjbfecbfbhgjjbfaijhdgbfeccdiihdijbefhjjjbbccgghffbggaaijfhaifbhebaighdheefbijjhbadacjidehgahjgajcagebfiecjcaejjfdbijefficghgeicafadidifdgeidgaihgjcibcbhijieaihaideafaacfcgdiajffihajbaifhdifejbbhaddbajjfjfdddfaadcdebaijdejehgaefcfijabcahgbdcddeibaihbbccchdbjbajhffbbfabjdaaggigahicijhhahaeccbgbgdbfhdcfebifhifeahhbbhcfjjbbhdaagcbhcgaaijdeagecjgjcgbiihdjdiahebgahajjdfccgahjacjhjjihdjbaag", "ahjhbabgjhibfhfgdhdijbiaijcaccecjgbbchdeijejcadhdjadhijheidifabagjijbcbgicddfdegijgbaedcegcghhdejgihbcefggihdicghaefdiiicbegedaghahcbdcjehhdbfbahbcdifbcdiacbjahjebdccfajdbdbcjbhgbhgbhgagedchgchjjgfajdbdcggbheaghejfcgfcjffgfifbdbfhgefjjbecbdejeajeeagebahhheiiffdcgiffgdiafccibgfiejagibdibhhehidaddjcbieidfgcjheajdbbeebahecjfgcbcdjjccbhbjchhegdhiiafbggdifdhbechfjadeejbfiaifdhjjjijhaihefebcbihhadfacaffgfahgafecceagdeaiegjijccehbgifbjffbjfhhiacjjieeafjgcghdeiejbghdjehihjdbcaeggfbcbbicbhfbfgagfjgcgaadbgjjfefjdahfdjciijeaidjadbbacbgagcebbgeahjgjgiedgbdhhhgbhbjgjajficehafjjedhffaidadgieeebdbehagbcjdhecfbicejcceajjajdeahecgjaiaifabcigffdgfgfjgdbbgcjdiiheddihfgafecjbejbfifdbjcaaffafeecbaadhecaahddgjjff"))


