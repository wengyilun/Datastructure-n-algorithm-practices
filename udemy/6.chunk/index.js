// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk2(array, size){
    let chunked = []

    for(let element of array){
        let last = chunked[chunked.length - 1]
        if(!last || last.length === size){
            chunked.push([element])

        }else{
            last.push(element)
        }
    }
    return chunked
}

function chunk(array, size) {
    let count =0
    let res = [] 
    let numOfChunks = Math.ceil(array.length / size) //?
    while(count < Math.ceil(array.length / size)){
        let startIndex = count*size //?
            let sliced = array.slice(startIndex, startIndex+size)
            sliced //?
            res.push(sliced);
        count++

    }
   
    return res
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunk([1, 2, 3, 4, 5], 10))
console.log(chunk([1, 2, 3, 4, 5], 4))

module.exports = chunk;