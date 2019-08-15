// left right center is a dice game of moving counters, sometimes played with euros

// goal of this program is to simulate the game and test my hypothesis that going first in the game gives a disadvantage
let game = (players, trials) => {
    // initialize conditions of game
    let won = false
    // // if next line is outside of outer while loop, the winner should start again, if we move it inside it would always start the same and let us judge first movers disadvantage
    // let player = 0
    let trial = 0
    let results = []
    // this outer loop allows multiple games for statistical analysis
    while (trial < trials) {
        let player = 0 // this is the crucial test case!!
        // initialize the counters
        let counters = []
        for (let i = 0; i < players; i++) {
            counters.push(3)
            // // testing rng for accuracy
            // let l = 0
            // let r = 0
            // let c = 0
            // let s = 0
            // for (let i = 0; i < 100; i++) {
            //     let roll = rollDie()
            //     switch (roll) {
            //         case 'l': l++; break;
            //         case 'r': r++; break;
            //         case 'c': c++; break;
            //         case 's': s++; break;
            //     }
            // }
            // console.log(l, r, c, s)
        }
        // this inner loop is one actual game
        while (!won) {
            let diceRolled = counters[player]
            if (diceRolled > 3) { diceRolled = 3 }
            if (diceRolled > 0) {
                for (let i = 0; i < diceRolled; i++) {
                    let turn = rollDie()
                    // console.log(player, turn, counters)
                    switch (turn) {
                        // play moves to the left
                        case "l":
                            counters[player]--;
                            counters[(player + 1) % players]++;
                            break;
                        case "r":
                            counters[player]--;
                            counters[(player - 1 + players) % players]++;
                            break;
                        case "c":
                            counters[player]--;
                            break;
                        // default:break;
                    }
                }
            }
            // we need to see if someone won, but since you never win on your turn (but rather a last competitor loses on hers)
            if (checkWin(counters)) {
                won = true
                results.push(counters)
            } else { player++ }
            player = player % players
        }
        // console.log('trial ' + trial, counters)
        trial++
        won = false
    }
    // console.log("results", results)
    return results
}
// console.log(game(5, 100))

function rollDie() {
    var dieFaces = ['l', 'r', 'c', 's', 's', 's']
    let rng = (Math.floor(Math.random() * 6));
    // console.log(rng)
    return dieFaces[rng]
}

function checkWin(counters) {
    let zeros = 0
    counters.forEach(number => {
        if (number == 0) { zeros++ }
    })
    if (zeros == counters.length - 1) { return true } else { return false }
}
// // testing checkWin
// console.log(checkWin([1, 2, 4, 5, 3, 1, 2, 3, 1, 5, 4, 3]))
// console.log(checkWin([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))

let analyzeResults = (array, players) => {
    winCounts = []
    for (let i = 0; i < players; i++) { winCounts.push(0) }
    array.forEach(result => {
        // console.log("XXX", result)
        result.forEach((number, player) => {
            if (number > 0) {
                // console.log("player ", player, "won")
                winCounts[player]++
            }
        })
    })
    return winCounts
}

console.log("total win counts: ", analyzeResults(game(8, 80000), 8))
