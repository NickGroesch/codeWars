// function code(text) {
//     let squaretext = text.slice()
//     let length = text.length
//     let n = 0//find smallest integer n such that n*n>=length
//     while (n * n < length) { n++ }
//     let target = n * n
//     let filler = String.fromCharCode(11)
//     while (squaretext.length < target) { squaretext += filler }
//     let plaintextArray = []
//     let encodedArray = []
//     let empty = [""]
//     for (let i = 0; i < n; i++) { plaintextArray[i] = squaretext.slice(i * n, (i * n) + (n)); empty[i] = "" }
//     // console.log(plaintextArray)
//     for (let i = 0; i < n; i++) { plaintextArray[i] = plaintextArray[i].split(""); encodedArray.push(new Array(...empty)) }
//     let local = ""
//     for (let i = n - 1; i >= 0; i--) {
//         for (let j = 0; j < n; j++) {
//             local = plaintextArray[n - 1 - j][i]
//             encodedArray[i][j] = local
//         }
//     }
//     // console.log(encodedArray)
//     for (let i = 0; i < n; i++) { encodedArray[i] = encodedArray[i].join("") }
//     let answer = encodedArray.join("\n")
//     return answer
// }

// function decode(ciphertext) {
//     let squared = ciphertext.split("\n")
//     // console.log(squared)
//     let n = squared[0].length
//     // console.log(`n=${n}`)
//     squared.forEach((value, index) => {
//         squared[index] = value.split("")
//     })
//     let decodedArray = []
//     let empty = []
//     for (let i = 0; i < n; i++) { empty[i] = "" }
//     for (let i = 0; i < n; i++) { decodedArray.push(new Array(...empty)) }

//     console.log(squared)
//     console.log(decodedArray)
//     let local = ""

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             local = squared[i][n - 1 - j]
//             console.log(local)
//             decodedArray[j][i] = local
//         }
//     }
//     // for (let i = 0; i <= n - 2; i++) {
//     //     for (let j = n; j > 0; j--) {
//     //         // local = plaintextArray[n - 1 - j][i]
//     //         // encodedArray[i][j] = local
//     //         local = squared[n - 1 - j][i]
//     //         decodedArray[i][j] = local
//     //     }
//     // }
//     for (let i = 0; i < n; i++) { decodedArray[i] = decodedArray[i].join("") }
//     console.log(decodedArray)
// }



console.log(decode(code("ABCDEFGHI")))


function code(text) {
    let squaretext = text.slice()
    let length = text.length
    let n = 0//find smallest integer n such that n*n>=length
    while (n * n < length) { n++ }
    let target = n * n
    let filler = String.fromCharCode(11)
    while (squaretext.length < target) { squaretext += filler }
    let plaintextArray = []
    let encodedArray = []
    let empty = [""]
    for (let i = 0; i < n; i++) { plaintextArray[i] = squaretext.slice(i * n, (i * n) + (n)); empty[i] = "" }
    for (let i = 0; i < n; i++) { plaintextArray[i] = plaintextArray[i].split(""); encodedArray.push(new Array(...empty)) }
    let local = ""
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            local = plaintextArray[n - 1 - j][i]
            encodedArray[i][j] = local
        }
    }
    for (let i = 0; i < n; i++) { encodedArray[i] = encodedArray[i].join("") }
    let answer = encodedArray.join("\n")
    return answer
}

function decode(ciphertext) {
    let squared = ciphertext.split("\n")
    let n = squared[0].length
    squared.forEach((value, index) => {
        squared[index] = value.split("")
    })
    let decodedArray = []
    let empty = []
    for (let i = 0; i < n; i++) { empty[i] = "" }
    for (let i = 0; i < n; i++) { decodedArray.push(new Array(...empty)) }
    let local = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            local = squared[i][n - 1 - j]
            decodedArray[j][i] = local
        }
    }
    for (let i = 0; i < n; i++) { decodedArray[i] = decodedArray[i].join("") }
    return decodedArray.join("").trim()
}