// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function buildCharMap(str){
   const charMap = {}
   for(let char of str.replace(/[^\w]/g).toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
   }
}

function anagrams2(stringA, stringB) {
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)
    if(Object.keys(aCharMap.length !== Object.keys(bCharMap)).length){
        return false;
    }

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }
    return true
}
function anagrams(stringA, stringB) {
    // 
   let s1 =  stringA.replace(/[^\w]/g,"").toLowerCase() //?
   let s2 =  stringB.replace(/[^\w]/g,"").toLowerCase() //?
    // same qty of letter
   const res= s1.split('').reduce((map, el)=>{
        
        if(map[el] === undefined){
            map[el]=1
        }else{
            map[el]+=1
        }
        return map

    },{})
    const res2= s2.split('').reduce((map, el)=>{
        if(map[el] === undefined){
            map[el]=1
        }else{
            map[el]+=1
        }
        return map

    },{})
    let ans = true;

    for(let key in res){
        if(res[key] !== res2[key]){
            res[key]//?
            ans = false;
        }
    }
    return ans
}

function cleanStrings(str){
     return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
 }
function anagrams3(stringA, stringB){
    stringA//?
    return cleanStrings(stringA) === cleanStrings(stringB)
}

console.log( anagrams3('rail safety', 'fairy tales'))
console.log( anagrams3('RAIL! SAFETY!', 'fairy tales'))
console.log( anagrams3('Hi there', 'Bye there'))


module.exports = anagrams;
