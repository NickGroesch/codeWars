function whoIsWinner(piecesPositionList) {
    // we need to create the board, add pieces according to list, and test for winning sequences after the sixth move
    let b = { A: [], B: [], C: [], D: [], E: [], F: [], G: [] }
    let solutions = generateWins()
    for (let i = 0; i < piecesPositionList.length; i++) {
        let move = piecesPositionList[i].split("_")
        b[move[0]].push(move[1])
        console.log(i, b)
        if (i > 5) {
            for (let j = 0; j < solutions.length; j++) {
                console.log(solutions[j], eval(solutions[j]))
                // console.log(b.B[0], b.C[0], b.D[0], b.E[0])
                if (eval(solutions[j])) {
                    return move[1]
                }
            }
        }
    }
    return "Draw"
    //return "Red", "Yellow" or "Draw"
}
console.log("WTF", undefined == undefined)
function generateWins() {
    let combos = []
    let letters = ["A", "B", "C", "D", "E", "F", "G"]
    // vertical
    for (let h = 0; h < letters.length; h++) {
        for (let i = 0; i < 3; i++) {
            combos.push(`b.${letters[h]}[${i}]==move[1]&&b.${letters[h]}[${i + 1}]==move[1]&&b.${letters[h]}[${i + 2}]==move[1]&&b.${letters[h]}[${i + 3}]==move[1]`)
            // combos.push(`b.${letters[h]}[${i}]==b.${letters[h]}[${i + 1}]==b.${letters[h]}[${i + 2}]==b.${letters[h]}[${i + 3}]`)
            // combos.push(`b.${letters[h]}[${i}]==b.${letters[h]}[${i + 1}]&&b.${letters[h]}[${i}]==b.${letters[h]}[${i + 2}]&&b.${letters[h]}[${i}]==b.${letters[h]}[${i + 3}]`)
        }
    }
    // horizontal
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            combos.push(`b.${letters[j]}[${i}]==move[1]&&b.${letters[j + 1]}[${i}]==move[1]&&b.${letters[j + 2]}[${i}]==move[1]&&b.${letters[j + 3]}[${i}]==move[1]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i}]==b.${letters[j + 2]}[${i}]==b.${letters[j + 3]}[${i}]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i}]&&b.${letters[j]}[${i}]==b.${letters[j + 2]}[${i}]&&b.${letters[j]}[${i}]==b.${letters[j + 3]}[${i}]`)
        }
    }
    // diagonal ++
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            combos.push(`b.${letters[j]}[${i}]==move[1]&&b.${letters[j + 1]}[${i + 1}]==move[1]&&b.${letters[j + 2]}[${i + 2}]==move[1]&&b.${letters[j + 3]}[${i + 3}]==move[1]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i + 1}]==b.${letters[j + 2]}[${i + 2}]==b.${letters[j + 3]}[${i + 3}]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i + 1}]&&b.${letters[j]}[${i}]==b.${letters[j + 2]}[${i + 2}]&&b.${letters[j]}[${i}]==b.${letters[j + 3]}[${i + 3}]`)
        }
    }
    // diagonal --
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            combos.push(`b.${letters[j]}[${i}]==move[1]&&b.${letters[j + 1]}[${i - 1}]==move[1]&&b.${letters[j + 2]}[${i - 2}]==move[1]&&b.${letters[j + 3]}[${i - 3}]==move[1]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i - 1}]==b.${letters[j + 2]}[${i - 2}]==b.${letters[j + 3]}[${i - 3}]`)
            // combos.push(`b.${letters[j]}[${i}]==b.${letters[j + 1]}[${i - 1}]&&b.${letters[j]}[${i}]==b.${letters[j + 2]}[${i - 2}]&&b.${letters[j]}[${i}]==b.${letters[j + 3]}[${i - 3}]`)
        }
    }
    return combos
}



// console.log(whoIsWinner(["C_Yellow",
//     "E_Red",
//     "G_Yellow",
//     "B_Red",
//     "D_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "G_Red",
//     "C_Yellow",
//     "C_Red",
//     "D_Yellow",
//     "F_Red",
//     "E_Yellow",
//     "A_Red",
//     "A_Yellow",
//     "G_Red",
//     "A_Yellow",
//     "F_Red",
//     "F_Yellow",
//     "D_Red",
//     "B_Yellow",
//     "E_Red",
//     "D_Yellow",
//     "A_Red",
//     "G_Yellow",
//     "D_Red",
//     "D_Yellow",
//     "C_Red"]), "Yellow");
console.log(whoIsWinner(["A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "G_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow"]), "Red");
// console.log(whoIsWinner(["A_Red",
//     "B_Yellow",
//     "A_Red",
//     "E_Yellow",
//     "F_Red",
//     "G_Yellow"]), "Draw")