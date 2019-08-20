
function fib(num) {
    numn = BigInt(num)
    let negCorrect = 1n
    if ((numn < 0n) && ((numn % -2n) == 0n)) { negCorrect = -1n } else { negCorrect = 1n }
    console.log(numn, negCorrect)
    let posifier = numn < 0n ? -1n : 1n
    let pfib = numn * posifier
    let lfib = posFib(pfib, 0n, 1n)
    console.log(lfib)
    return negCorrect * lfib
}
function posFib(index, now, next) {
    return index > 0n ? posFib(index - 1n, next, now + next) : now
}
// } else {
//     //   n=-n
//     return function negFib(index, now, next) {
//         return index < 0 ? negFib(index + 1n, next, now + next) : now
//     }(n, -0n, -1n)
// }

this //is the twist
//  Unnamed(1 dan)1 month ago
//fib (-2) + fib (-1) == fib 0 and fib 0 == 0, so they can't be all negative.

console.log(fib(1000000
))
// console.log(fib(-2))
// console.log(fib(-3))

// console.log(fib(-4))
// console.log(fib(-5))
// console.log(fib(-6))