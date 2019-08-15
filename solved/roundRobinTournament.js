function buildMatchesTable(numberOfTeams) {
    let teams = []
    matches = []
    rounds = numberOfTeams - 1
    for (let i = 1; i < numberOfTeams; i++) {
        teams.push(i)
    }
    let half = teams.splice(0, (numberOfTeams / 2))
    // console.log("teams", teams)
    // console.log("half", half)
    for (let i = 1; i <= rounds; i++) {
        let round = []
        for (let j = 0; j < half.length; j++) {
            if (j == half.length - 1) {
                round.push([half[j], numberOfTeams])
            } else {
                round.push([half[j], teams[j]])
            }
        }
        matches.push(round)
        // console.log("matches this round", round)
        teams.push(half.pop())
        half.unshift(teams.shift())
        // console.log("round", i)
        // console.log("teams", teams)
        // console.log("half", half)
    }
    return matches
}
console.log(buildMatchesTable(6))
