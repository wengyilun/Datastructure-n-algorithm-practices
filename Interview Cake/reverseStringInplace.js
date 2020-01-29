function reverseStringInPlace3(arrayOfChars){
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}

let str = Array.from('apple')
console.log(reverseStringInPlace3(str))//?
console.log('str',str.join(''))





function reverseStringInPlace (str){
    const strArr = str.split('')
    strArr//?

    const res = strArr.reduce((finalStr, char)=>{
        return char + finalStr 
    },'')
        
    return res
}
function reverseStringInPlace2 (str){
    const strArr = str.split('')
    strArr//?

    let left = 0
    let right = strArr.length-1

    while(left < right){
        const temp = strArr[left]
        strArr[left] = strArr[right]
        strArr[right] = temp
        left++
        right--
    }
        
    return strArr.join('')//?
}

reverseStringInPlace('apple')//?
reverseStringInPlace2('apple')//?