function VigenèreCipher(key, abc) {
    let keyArray = key.split("")
    this.encode = function (str) {
        let plaintext = str.split('')
        let ciphertext = []
        for (let i = 0; i < plaintext.length; i++) {
            ciphertext.push(ceasarShift(plaintext[i], key[i % key.length], abc))
        }
        return ciphertext.join('')
    };
    this.decode = function (str) {
        let ciphertext = str.split('')
        let plaintext = []
        for (let i = 0; i < ciphertext.length; i++) {
            plaintext.push(ceasarUnShift(ciphertext[i], key[i % key.length], abc))
        }
        return plaintext.join('')
    };
}

function ceasarShift(letter, keyLetter, abc) {
    let alphabet = abc.split('')
    let index = alphabet.indexOf(letter)
    let keyIndex = alphabet.indexOf(keyLetter)
    // console.log("inside", index)
    if (index == -1) { return letter }
    return alphabet[(index + keyIndex) % alphabet.length]
}

function ceasarUnShift(letter, keyLetter, abc) {
    let alphabet = abc.split('')
    let index = alphabet.indexOf(letter)
    let keyIndex = alphabet.indexOf(keyLetter)
    // console.log("inside", index)
    if (index == -1) { return letter }
    let indice = index - keyIndex
    if (indice < 0) { indice += alphabet.length }
    return alphabet[indice]
}


// let abc = "abcdefghijklmnopqrstuvwxyz"
// console.log("outside", ceasarShift("c", "c", abc))




// // testing
var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars'), 'rovwsoiv');
console.log(c.decode('rovwsoiv'), 'codewars');

console.log(c.encode('waffles'), 'laxxhsj');
console.log(c.decode('laxxhsj'), 'waffles');

console.log(c.encode('CODEWARS'), 'CODEWARS');
console.log(c.decode('CODEWARS'), 'CODEWARS');
