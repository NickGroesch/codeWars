function rank(st, we, n) {
    const rank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (!st.length) { return "No participants" }
    let arrNames = st.split(",")
    if (n > arrNames.length) { return "Not enough participants" }
    let arrSom = []
    arrNames.forEach((name, index) => {
        let som = name.length
        let arrLetters = name.split("")
        arrLetters.forEach(letter => {
            som += rank.indexOf(letter.toLowerCase()) + 1
        })
        let score = som * we[index]
        arrSom.push({ name: name, score: score })
    })
    let copy = [...arrSom]
    let sortedSom = arrSom.sort((a, b) => a.score - b.score)//score sorted only
    let alphasort = []
    let alphaindex
    for (let i = 0; i < sortedSom.length - 1; i++) {
        if (sortedSom[i].score == sortedSom[i + 1].score) {
            alphaindex = i
            alphasort.push(sortedSom[i], sortedSom[i + 1])
        }
    }
    console.log("alphasort", alphasort)
    let samescore = alphasort.sort((a, b) => a.name + b.name)
    samescore.forEach((v, i) => sortedSom[alphaindex + i] = v)

    let winner = sortedSom[sortedSom.length - n]
    //   console.log(winner)
    //   console.log(arrSom)
    let windex = copy.indexOf(winner)
    //   console.log(windex)
    return arrNames[windex]
}