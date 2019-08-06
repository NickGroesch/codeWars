function code(text) {
    let squaretext = text.slice()
    let length = text.length
    //     find smallest integer n such that n*n>=length
    let n = 0
    while (n * n < length) { n++ }
    let target = n * n
    let filler = String.fromCharCode(11)
    while (squaretext.length < target) { squaretext += filler }
    let plaintextArray = []
    let encodedArray = []
    let empty = [""]
    for (let i = 0; i < n; i++) { plaintextArray[i] = squaretext.slice(i * n, (i * n) + (n)); empty[i] = "" }
    console.log(plaintextArray)
    for (let i = 0; i < n; i++) { plaintextArray[i] = plaintextArray[i].split(""); encodedArray.push(empty) }
    //   let practice=[['a','b','c'],['d','e','f'],['g','h','i']]
    //   let goal=[['','',''],['','',''],['','','']]
    let local = ""
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            //   for(let i=0; i<3; i++){
            //     for(let j=0; j<3; j++){
            //      goal[i][j]=practice[2-j][i]
            local = plaintextArray[n - 1 - j][i]
            //         console.log(local)
            encodedArray[i][j] = local
        }
    }
    //     console.log(goal)
    console.log(encodedArray)
    for (let i = 0; i < n; i++) { encodedArray[i] = encodedArray[i].join("") }
    let answer = encodedArray.join("/n")
    return answer
}

function decode(s) {
    // your code
}