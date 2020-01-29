// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []
    let count =0
    while(count < n){
        results[count] = []
        count++
    }

    let rowStart = 0;
    let rowEnd = n-1;
    let colStart = 0;
    let colEnd = n-1;
    let counter = 1
    
    while(rowStart <= rowEnd && colStart <= colEnd){
        for(let col=colStart; col<= colEnd; col++){
            results[rowStart][col] = counter;
            counter++
        }
        rowStart++

        for(let row=rowStart; row<=rowEnd; row++){
            results[row][colEnd] = counter;
            counter++
        }
        colEnd--;

        for(let col=colEnd; col>=colStart; col--){
            results[rowEnd][col] = counter;
            counter++;
        }
        rowEnd--;

        for(let row=rowEnd; row>=rowStart; row-- ){
            results[row][colStart] = counter;
            counter++;
        }
        colStart++;

    }
    return results
}

console.log(matrix(2))
console.log(matrix(3))
console.log(matrix(4))

module.exports = matrix;
