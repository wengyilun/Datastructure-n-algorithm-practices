// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let count = 0;
    let output = ''
    while(count < n){
        // insert space
        let space = ''
        let char = ''
        for(let c=0; c<=count; c++){
            char+="#"
         }
        for(let i=1; i<n-count; i++){
           
           space+=' '
        }
        
        // output += `'${char}${space}'`

        console.log(`'${char}${space}'`)
        count++
    }
    console.log(output) 
}

console.log(steps(3))
console.log(steps(4))

module.exports = steps;
