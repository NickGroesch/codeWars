var decodeBits = function (bits) {
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
    // now find greatest common factor of numbers
    let gcf = Math.min(...numbers)
    let solved = false
    while (solved = false) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % gcf != 0) {
                gcf -= 1
                break
            }
        }
        solved = true
    }
    console.log(gcf)
    let newbits = ''
    for (let i = 0; i < bits.length; i += gcf) {
        newbits += bits[i]
    }
    console.log(newbits)
    return newbits.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
}

var decodeMorse = function (morseCode) {
    console.log(morseCode)
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


// console.log(Math.min(...[4, 5, 6, 7, 8, 9]))