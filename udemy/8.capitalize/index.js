// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str.split(' ').map((word, index)=>{
        return word[0].toUpperCase() + word.substring(1)
    }).join(' ')
}

function capitalize2(str){
    let resultStr = str[0].toUpperCase()
    for(let i=1; i< resultStr.length; i++){
        if(str[i-1]=== ''){
            str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }
    return resultStr
}

console.log(capitalize('a short sentence'))
console.log(capitalize('a lazy fox'))
console.log(capitalize('look, it is working!'))
module.exports = capitalize;
