// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const res = str.split('').reduce((map, char)=>{
        if(map[char] === undefined){
            map[char] = 0;
        }
        map[char] += 1
        return map
    }, {})

    let max = 0;
    let maxChar = ''
    for(let key in res){
        if(res[key] > max){
            max = res[key]
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxChar("abcccccccd"))//?
console.log(maxChar("apple 1231111"))//?

module.exports = maxChar;
