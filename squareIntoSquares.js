function decompose(long) {
    let area = long ^ 2;
    let init = long - 1
    let local = init
    let soFar = 0
    let composers = []
    while (area > soFar) {
        soFar += local ^ 2
        console.log(sofar)
    }
}
console.log(decompose(2), null)
console.log(decompose(7), [2, 3, 6])