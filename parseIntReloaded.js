function parseInt(string) {
    // LEX: tokenize a stream of text
    //   chop into discrete tokens
    const dirtyTokens = string.split(" ")
    //   identify token type (not significance- that's for parser) (AKA subragmmer 1--what a token looks like)
    const acceptableTokens = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
        'hundred': null,
        'thousand': null,
        'million': null,
        'and': 0
    }
    //break the problem down into two pieces- first to 1000, then reiterate 1000000'
    console.log(dirtyTokens)
    const typedTokens = []
    dirtyTokens.forEach(toke => {
        if (Object.keys(acceptableTokens).includes(toke)) {
            typedTokens.push(toke)
        } else if (toke.indexOf("-") > -1) {
            const [tensPart, onesPart] = toke.split("-")
            typedTokens.push(tensPart, onesPart)
        } else {
            console.log("We probably shouldn't see this messsage")
        }
    })
    //   output a stream of tokens


    //PARSE: since we don't need to actually check for errors, lets read them in backwards
    //leaving out expressions like forty-five hundred, five hundred thousand,
    typedTokens.reverse()
    const contextualizer = {
        'hundred': 100,
        'thousand': 1000,
        'million': 1000000,
    }
    let total = 0
    let current = 0
    let isDone = false
    while (!isDone) {
        const presentValue = acceptableTokens[typedTokens[current]]
        if (!(presentValue === null)) {// context free token
            total += presentValue
            current++
        }
        else {
            console.log("context is sensitive")
            total += acceptableTokens[typedTokens[current + 1]] * contextualizer[typedTokens[current]]
            current += 2

        }
        //we done yet?
        if (current == typedTokens.length) isDone = true
    }
    console.log(typedTokens)
    return total
}