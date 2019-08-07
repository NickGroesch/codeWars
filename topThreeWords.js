function topThreeWords(text) {
    let frequency = {}
    let array = text.match(/[a-zA-z']+/ig)//match words
    array.forEach((word, index) => array[index] = word.toLowerCase())//clean data
    array.forEach(word => {//frequency assessment
        if (frequency[word]) { frequency[word]++ } else { frequency[word] = 1 }
    });
    let list = []
    for (word in frequency) {
        list.push({ letter: word, frequency: frequency[word] })
    }
    list.sort((a, b) => b.frequency - a.frequency)

    // TODO: switch case for return
    return [list[0].letter, list[1].letter, list[2].letter]
}
// // given a text, return the top three words by frequency

let wordDef = /[a-zA-z']+/
// let frequency = {}
// array.forEach(word => {
//     if (frequency[word]) { frequency[word]++ } else { frequency[word] = 1 }
// });
// console.log(frequency)




topThreeWords("a a a  b  c c  d d d d  e e e e e")// ['e','d','a']