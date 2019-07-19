var decodeBits = function (bits) {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
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
    // now find greatest common factor of numbers
    let gcf = 2
    let solved = false
    while (solved = false) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % gcf != 0) {
                gcf += 1
                break
            }
        }
        solved = true
    }
    console.log(gcf)
    // return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
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
    // return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
}