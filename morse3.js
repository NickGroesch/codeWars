var decodeBitsAdvanced = function (bits) {
    bits = bits.replace(/^0+|0+$/g, '');
    // we must determine the sample rate relative to the transmission rate. presently assuming whole numbers
    let counter = 0
    let numbers = []
    for (let i = 1; i < bits.length; i++) {
        counter++
        if (bits[i] != bits[i - 1]) {
            numbers.push(counter)
            counter = 0
        }
    }
    console.log(numbers)
    // now lets get the distribution of the numbers
    let distribution = {}
    for (let i = 0; i < numbers.length; i++) {
        if (distribution[numbers[i]]) {
            distribution[numbers[i]]++
        } else {
            distribution[numbers[i]] = 1
        }
    }
}

var decodeMorse = function (morseCode) {
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
