var maxSequence = function (array) {
    let maximum = 0
    if (array.length == 0) { return maximum } else {
        for (let start = 0; start < array.length - 1; start++) {
            for (let end = start + 1; end < array.length - 1; end++) {
                let local = array.slice(start, end)
                let sum = local.reduce((accumulator, currentValue) => accumulator + currentValue)
                if (sum > maximum) { maximum = sum }
            }
        }
        return maximum
    }
}

console.log(maxSequence([]))// 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))// 6