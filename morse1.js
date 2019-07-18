decodeMorse = function (morseCode) {
    //your code here
    let trimmed = morseCode.trim()
    let words = trimmed.split('   ')
    let message = ''
    words.forEach((word, index) => {
        let letters = word.split(' ')
        let local = ''
        letters.forEach(letter => {
            local += MORSE_CODE[letter]
        })
        message += local
        if (index != words.length - 1) { message += ' ' }
    })
    return message
}
//   console.log(MORSE_CODE['...'])//only works on codewars for preloaded dictionary