var recoverSecret = function (triplets) {
    let secretWord = triplets.shift()
    let interpolated = false
    let solved = false
    let currentMarker = 0
    while (!solved) {
        while (!interpolated) {
            console.log(secretWord)
            console.log(triplets)
            console.log(currentMarker)
            if (secretWord.includes(triplets[currentMarker][0]) && secretWord.includes(triplets[currentMarker][2])) {
                secretWord.splice(secretWord.indexOf(triplets[currentMarker][0]) + 1, 0, triplets[currentMarker][1])
                triplets.splice(currentMarker, 1)
                currentMarker = 0
            } else { currentMarker++ }
            if (currentMarker == triplets.length) {
                currentMarker = 0
                interpolated = true
            }
        }
        // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
        //     solved = true
        //     break
        // }
        // if (secretWord.includes(triplets[0][2])) {
        //     secretWord.unshift(triplets[0][0])
        //     interpolated = false
        // }
        // if (secretWord.includes(triplets[0][0])) {
        //     secretWord.push(triplets[0][2])
        //     interpolated = false
        // }
        // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
        //     solved = true
        // }
        // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
        solved = true
        break
    }
    if (secretWord.includes(triplets[0][2])) {
        secretWord.unshift(triplets[0][0])
        interpolated = false
    } else
        if (secretWord.includes(triplets[0][0])) {
            secretWord.push(triplets[0][2])
            interpolated = false
        } else if (secretWord.includes(triplets[0][1])) {
            secretWord.push(triplets[0][2])
            secretWord.unshift(triplets[0][0])
        } else { triplets.push(triplets.shift()) }


    return Array.from(new Set(secretWord)).join("")
}


//       console.log("extrapolation time")
// if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
//     solved = true
//     break
// }
// if (secretWord.includes(triplets[0][2])) {
//     secretWord.unshift(triplets[0][0])
//     interpolated = false
// }else 
// if (secretWord.includes(triplets[0][0])) {
//     secretWord.push(triplets[0][2])
//     interpolated = false
// } else if  (secretWord.includes(triplets[0][1])){
//   secretWord.push(triplets[0][2])
//   secretWord.unshift(triplets[0][0])
//   }else{triplets.push(triplets.shift())}
// }
secret1 = "whatisup"
triplets1 = [
    ['t', 'u', 'p'],//0 tup
    ['w', 'h', 'i'],
    ['t', 's', 'u'],//1 tsup
    ['a', 't', 's'],//3 atisup
    ['h', 'a', 'p'],//
    ['t', 'i', 's'],//2 tisup
    ['w', 'h', 's']
]
console.log(recoverSecret(triplets1))