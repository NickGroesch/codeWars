// JS bigInts has already been preloaded in constant BigNumber
// Usage: https://github.com/MikeMcl/bignumber.js/
function height(n, m) {
    // we can break it down for 2 eggs like this
    // n+(n-1)+(n-2)...+1=floors
    // we need an unbalanced binary search, that will adjust


    // for three eggs how does this change the series we can construct?
    return new BigNumber(0);
}
let eggs2 = (trys) => {
    let intergerator = 1//is this the same as 2**eggs-2
    let sum = 0
    for (let i = 0; i < trys; i++) {
        sum += intergerator
        intergerator += 1
    }
    console.log(sum)
}
eggs2(14)//==105
eggs2(20)//==210

function makeTree(eggs, tries) {
    let downNodes = eggs - 1

}