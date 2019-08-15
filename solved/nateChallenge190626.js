let checkFits = (array) => {
    let counter = 0
    // array is always 10 long
    // actually we think there are no permutations 10 long that wrap proper
    for (let i = 0; i < 5; i++) {
        let x = (2 * i + 2) % 10
        let y = 2 * i + 1
        let z = 2 * i
        // console.log(i, z, y, x)
        if (array[z] + array[y] == array[x]) {
            counter++
        }
        if (array[z] - array[y] == array[x]) {
            counter++
        }
    }
    if (counter == 5) { return true } else { return false }
}
// console.log("test", checkFits([9, 2, 7, 6, 1, 4, 5, 3, 8]))
// console.log(checkFits([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
let checkAll = () => {
    let counter = 0
    let answers = []
    let perms = permutations(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    // let perms = permutations(["1", "2", "3",])
    perms.forEach(value => {
        let num = value.toString().split("")
        // console.log(num)
        let mapped = num.map(a => parseInt(a))
        if (checkFits(mapped)) {
            counter++
            console.log(mapped)
            answers.push(mapped)
        }
    })
    // for (let i0 = 0; i0 < 10; i0++) {
    //     for (let i1 = 0; i1 < 10; i1++) {
    //         for (let i2 = 0; i2 < 10; i2++) {
    //             for (let i3 = 0; i3 < 10; i3++) {
    //                 for (let i4 = 0; i4 < 10; i4++) {
    //                     for (let i5 = 0; i5 < 10; i5++) {
    //                         for (let i6 = 0; i6 < 10; i6++) {
    //                             for (let i7 = 0; i7 < 10; i7++) {
    //                                 for (let i8 = 0; i8 < 10; i8++) {
    //                                     for (let i9 = 0; i9 < 10; i9++) {
    //                                         let array = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9]
    //                                         if (checkFits(array)) {
    //                                             counter++
    //                                             console.log(array)
    //                                             answers.push(array)
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    return (answers)
}
console.log("checkAll", checkAll().length)

// permutations based

function permutations(array) {
    let results = []
    if (array.length == 1) {
        return array[0]
    } else {
        for (let i = 0; i < array.length; i++) {
            let copy = [...array]
            let one = copy.splice(i, 1)
            let others = copy
            // console.log(one, 'x', others)
            let recursions = permutations(others)
            for (let j = 0; j < recursions.length; j++) {
                results.push(one + recursions[j])
            }
        }
    }
    return results
}

// console.log(permutations(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]))
// console.log(permutations(["a", "b", "c"]))