// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let num = 0;
    let seq = []
    let firstNum = 0;
    let secondNum = 1;
    let count = 0;
    while(count < n){
        seq.push(firstNum)
        seq.push(secondNum)
        let temp = secondNum
        firstNum = firstNum + secondNum
        secondNum = temp + firstNum;
        count++;
    }
        
    return seq[n]
}

function fib2(n){
    let arr = [0, 1];

    for(let i=2; i<=n; i++){
        i
        let a = arr[i-1];
        let b = arr[i-2];

        arr.push(a+b)
    }
    return arr[n]
}

function slowFib(n){
   if(n<2){
       return n
   }
   return fib3(n-1) + fib3(n-2)
}


const fib3 = memoizedFib(slowFib)
console.log(fib3(4))

function memoizedFib(fn){
    const cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args]
        }

        const result = fn.apply(this,args)
        cache[args] = result
        return result
    }
}


console.log(fib(4)) 
console.log(fib2(4)) 
console.log(slowFib(4))



module.exports = fib;
