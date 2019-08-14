// lets do it with a constructor function
function Square(row, col, value) {
    this.row = row
    this.col = col
    if (value) {
        this.solved = true
        this.options = [value]
    } else {
        this.solved = false
        this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    this.nonent = determineNonent(row, col)
}

const determineNonent = (row, col) => {
    if (1 <= row && row <= 3) {
        if (1 <= col && col <= 3) { return 1 } else if (4 <= col && col <= 6) { return 2 } else { return 3 }
    } else if (4 <= row && row <= 6) {
        if (1 <= col && col <= 3) { return 4 } else if (4 <= col && col <= 6) { return 5 } else { return 6 }
    } else {
        if (1 <= col && col <= 3) { return 7 } else if (4 <= col && col <= 6) { return 8 } else { return 9 }
    }
}

const drawEmptyBoard = () => {
    let board = []
    for (let i = 1; i <= 9; i++) {
        let row = []
        for (let j = 1; j <= 9; j++) {
            row.push(new Square(i, j))
        }
        board.push(row)
    }
    return board
}
console.log(drawEmptyBoard())

// Let's start to develop some actual game logic. We can have getters and setters for possibilities in each row, column, and nonent
