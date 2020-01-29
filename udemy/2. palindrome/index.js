// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
    let reversed = str.split('').reverse().join('')
    return str === reversed
}

function palindrome3(str) {
    return Array.from(str).every((char, i)=>{
        return char === str[str.length - i -1]
    })
}


function palindrome(str) {
    if(str.length % 2 !== 0) return false
    // split string to left and right half
    let midPoint = (str.length/2) //?
    let left = str.substring(0,midPoint)//?
    let right = str.substring(midPoint, str.length)//?
    let rightReversed = Array.from(right).reverse().join('')//?
    if(left ===rightReversed){
       return true
    }

    return false
}

module.exports = palindrome;

palindrome('abba')//?

palindrome2('abbba')//?

palindrome3('cattac')//?