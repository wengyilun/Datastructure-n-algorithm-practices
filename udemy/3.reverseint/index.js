// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt2(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')
    return parseInt(reversed) * Math.sign(n)
}

function reverseInt(n) {
    let str = n.toString()//?
    let res = ''
    for(let char of str){
        res = char + res
    }
    return parseInt(res) * Math.sign(n)
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

module.exports = reverseInt;
