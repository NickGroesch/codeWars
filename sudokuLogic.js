// lets do it with a constructor function
let square = (row, col, value) => {
    if (value) {
        this.solved = true
        this.options = [value]
    } else {
        this.solved = false
        this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    this.nonent = getNonent()
}

let getNonent = (row, col) => {
    if (1 <= row && row <= 3) {
        if (1 <= col && col <= 3) { return 1 } else if (4 <= col && col <= 6) { return 2 } else { return 3 }
    } else if (4 <= row && row <= 6) {
        if (1 <= col && col <= 3) { return 4 } else if (4 <= col && col <= 6) { return 5 } else { return 6 }
    } else {
        if (1 <= col && col <= 3) { return 7 } else if (4 <= col && col <= 6) { return 8 } else { return 9 }
    }
}

console.log(getNonent(1, 1));
console.log(getNonent(3, 4));
console.log(getNonent(2, 8));
console.log(getNonent(4, 1));
console.log(getNonent(5, 5));
console.log(getNonent(6, 9));
console.log(getNonent(7, 2));
console.log(getNonent(8, 6));
console.log(getNonent(9, 9));