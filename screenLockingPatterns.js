// Feel free to write and use any additional functions, variables, objects, etc. as you wish
// assuming you can't reuse a dot, lets start by making an object that lists the available moves
let legalMoves = {
    A: ['B', 'D', 'E', 'F', 'H'],
    B: ['A', 'D', 'G', 'E', 'C', 'F', 'I'],
    C: ['B', 'D', 'E', 'F', 'H'],
    D: [],
    E: [],
    F: [],
    G: ['B', 'D', 'E', 'F', 'H'],
    H: ['A', 'D', 'G', 'E', 'C', 'F', 'I'],
    I: ['B', 'D', 'E', 'F', 'H'],
}
// this won't work because more moves become legal after certain vertices have been eliminated

/* String, Int ->  Int */
function countPatternsFrom(firstDot, length) {
    // Your code here
}