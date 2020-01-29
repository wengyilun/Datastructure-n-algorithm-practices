function findSmallestIndex(arr){
    let smallest = arr[0]
    let smallestIndex = 0;
    for(let i=0; i <arr.length-1; i++){
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i
        } 
    }
    return smallestIndex //?
}

function selectionSort(arr){
    let sortedArr = []

    for(let i=0; i<arr.length-1; i++){
        const smallestIndex = findSmallestIndex(arr)
        const newArr = arr.splice(smallestIndex, 1) //?
        //console.log("arr", arr)
       // console.log("newArr", newArr)

        sortedArr.push(arr)
    }
    return sortedArr
}

console.log(selectionSort([5,3,6,2,10]))