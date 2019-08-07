String.prototype.toJadenCase = function () {
    let array = this.split(" ")
    array.forEach((word, index) => array[index] = word[0].toUpperCase() + word.slice(1))
    return (array.join(" "))
};
let str = "how can mirrors be real"
console.log(str.toJadenCase())