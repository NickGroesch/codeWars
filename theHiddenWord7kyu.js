function hiddenWord(num) {
    const array = num.toString().split("")
    const dict = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"]
    return array.map(value => dict[parseInt(value)]).join("")
}






console.log(hiddenWord(637), "aid");
console.log(hiddenWord(7415), "debt");
console.log(hiddenWord(49632), "email");
console.log(hiddenWord(942547), "melted");