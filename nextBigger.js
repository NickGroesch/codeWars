// function nextBigger(n) {
//     // first permute all the digits, then sort permutations as numbers, returning next one
//     let digits = n.toString().split("")
//     let stringList = permutations(digits)
//     let intList = stringList.map(a => parseInt(a))
//     // let sorted = intList.sort((a, b) => a - b)
//     let sorted = Array.from(new Set(intList))
//     let index = sorted.indexOf(n)
//     return sorted[index + 1]

// }

// function permutations(array) {
//     let results = []
//     if (array.length == 1) {
//         return array[0]
//     } else {
//         for (let i = 0; i < array.length; i++) {
//             let copy = [...array]
//             let one = copy.splice(i, 1)
//             let others = copy
//             // console.log(one, 'x', others)
//             let recursions = permutations(others)
//             for (let j = 0; j < recursions.length; j++) {
//                 results.push(one + recursions[j])
//             }
//         }
//     }
//     return results
// }
// above approach works rigorously but times out, there must be something simpler based on maths!





// let nextBigger = (n) => {
//     let digits = n.toString().split("")
//     let word = parseInt(digits.join(""))
//     for (let i = digits.length - 1; i >= 0; i--) {//rather than nested loops and merely testing for 
//         for (let j = 1; j <= digits.length - 2; j++) {
//             let local = new Array(...digits)
//             let swap = i - j
//             let temp = local[i]
//             local[i] = local[swap]
//             local[swap] = temp
//             let compare = parseInt(local.join(""))
//             if (compare > word) {
//                 return compare
//             }else if(i==0 && j==digits.length-2){return -1}
//         }
//     }
// }
//this approach only swaps, and sometimes multiple swaps are better



let nextBigger = (n) => {
    let digits = n.toString().split("")
    let word = parseInt(digits.join(""))
    let end = digits.length - 1
    let swapspot
    for (let i = digits.length - 2; i >= 0; i--) {// find the first place where the number is sorted ascending (swapspot)
        if (digits[i] < digits[i + 1]) {
            swapspot = i
            break
        }
    }
    // let newDigits= digits.
    if (!swapspot) { return -1 } else {//if its in descending order its impossible to make a bigger number
        //find the smallest digit greater than swapspot value right of the swapspot index (nextSwap)

        for (let i = swapspot; i < digits.length; i++) {
            if (digits[i])
        }

        //swap swapspot value and nextSwap value


    }
}
nextBigger(23514)

console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)