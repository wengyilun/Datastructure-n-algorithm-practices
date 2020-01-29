// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   let vowels = ['a', 'e', 'i', 'o', 'u', 'abc'];

   return Array.from(str).reduce((count, char)=>{
       if(vowels.indexOf(char.toLowerCase())!== -1){
           count+=1
       }
       return count
   }, 0)
}

function vowels3(str) {
   let vowels = 'aeiou';
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count+=1
        }
    }
    return count
}


function vowels2(str) {
    const result = str.match(/[aeiou]/gi)
    const count = result ? result.length : 0
   return count
}


console.log(vowels('Hi There!'))
console.log(vowels2('Why do you ask?'))
console.log(vowels3('Why do you ask?'))
module.exports = vowels;
