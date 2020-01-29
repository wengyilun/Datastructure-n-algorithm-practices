function binarySearch(arr, item){
    // use two pointers
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex < rightIndex){
        let midIndex = (rightIndex - leftIndex)/2
        if(arr[midIndex] === item){
            return midIndex
        }
        if(arr[midIndex] > item){
            rightIndex = midIndex - 1
        }
    
        if(arr[midIndex] < item){
            leftIndex = midIndex + 1
        }
    }

}

console.log(binarySearch([1,2,3,4,5,6,7], 2))