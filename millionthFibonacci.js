
function fib(num) {
    num = BigInt(num)
    let negCorrect = 1n
    num < 0 && num % -2n == 1n ? negCorrect = -1n : negCorrect = 1n
    console.log(num, negCorrect)
    let fib = posFib(num, 0n, 1n)
    // if (n >= 0) {
    function posFib(index, now, next) {
        return index > 0 ? posFib(index - 1n, next, now + next) : now
    }
    return negCorrect * fib
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

console.log(fib(-1))
console.log(fib(-2))
console.log(fib(-3))

console.log(fib(-4))
console.log(fib(-5))
console.log(fib(-6))