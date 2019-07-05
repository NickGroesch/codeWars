function VigenèreCipher(key, abc) {
    let keyArray = key.split("")
    this.encode = function (str) {
        let plaintext = str.split('')
        let ciphertext = []
        for (let i = 0; i < plaintext.length; i++)

            return ciphertext.join('')
    };
    this.decode = function (str) {
        //...
    };
}

function ceasarShift(letter, keyLetter, abc) {
    let alphabet = abc.split('')
    let index = alphabet.indexOf(letter)
    let keyIndex = alphabet.indexOf(keyLetter)
    // console.log("inside", index)
    return alphabet[index + keyIndex]
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
