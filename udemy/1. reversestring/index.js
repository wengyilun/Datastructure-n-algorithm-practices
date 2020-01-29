// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return Array.from(str).reverse().join('')//?
}

function reverse2(str) {
    let reversed = ''
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed
}


function reverse3(str) {
    return str.split('').reduce((final, char) =>{
        return char + final
    }, '')
}

module.exports = reverse;

reverse('apple') //?
reverse2('apple') //?
reverse3('apple') //?