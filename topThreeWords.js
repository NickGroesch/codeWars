function topThreeWords(text) {
    // let array = text.split(" ")
    // let frequency = {}
    // array.forEach(word => {
    //     if (frequency[word]) { frequency[word]++ } else { frequency[word] = 1 }
    // });
    // console.log(frequency)
    array = text.match(/[a-zA-z']+/ig)
    console.log(array)

}
// // given a text, return the top three words by frequency

let wordDef = /[a-zA-z']+/