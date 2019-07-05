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
let nextBigger = (n) => {
    let digits = n.toString().split("")
    let counter = -1
    let word = parseInt(digits.join(""))
    while (word <=)
}
nextBigger(23514)

console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)