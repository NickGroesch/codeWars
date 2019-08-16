
function fib(n) {
    n = BigInt(n)
    if (n >= 0) {
        return function posFib(index, now, next) {
            return index > 0 ? posFib(index - 1n, next, now + next) : now
        }(n, 0n, 1n)
    } else {
        //   n=-n
        return function negFib(index, now, next) {
            return index < 0 ? negFib(index + 1n, next, now + next) : now
        }(n, -0n, -1n)
    }
}

console.log(fib(-1))
console.log(fib(-2))
console.log(fib(-3))

console.log(fib(-4))
console.log(fib(-5))
console.log(fib(-6))