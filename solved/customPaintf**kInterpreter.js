function interpreter(code, iterations, width, height) {
    let memory = []
    let wide = []
    for (let i = 0; i < width; i++) { wide.push(0) }
    for (let i = 0; i < height; i++) { memory.push([...wide]) }
    let pointer = [0, 0]
    let commands = code.split('')
    let comma = 0//short for which command we are on
    let step = 0
    while (commands[comma] && step < iterations) {
        switch (commands[comma]) {
            case "n":
                pointer[0]--
                if (pointer[0] < 0) { pointer[0] = height - 1 }
                comma++
                step++
                break;
            case "s":
                pointer[0]++
                if (pointer[0] == height) { pointer[0] = 0 }
                comma++
                step++
                break;
            case "e":
                pointer[1]++
                if (pointer[1] == width) { pointer[1] = 0 }
                comma++
                step++
                break;
            case "w":
                pointer[1]--
                if (pointer[1] < 0) { pointer[1] = width - 1 }
                comma++
                step++
                break;
            case "*":
                memory[pointer[0]][pointer[1]] == 0 ? memory[pointer[0]][pointer[1]] = 1 : memory[pointer[0]][pointer[1]] = 0
                comma++
                step++

                break;
            case "[":
                if (memory[pointer[0]][pointer[1]] == 0) { comma = findCloser(comma, commands) }
                else { comma++ }
                step++
                break;
            case "]":
                if (memory[pointer[0]][pointer[1]] == 1) { comma = findOpener(comma, commands); step++ }
                else { comma++ }
                break;
            default:
                comma++
                break;
        }
    }
    let flatten = []
    memory.forEach(array => flatten.push(array.join("")))
    let memoryString = flatten.join("\r\n")
    return memoryString
}
function findCloser(index, commandArray) {
    let counter = 0
    for (let j = index + 1; j < commandArray.length; j++) {
        if (counter == 0 && commandArray[j] == "]") { return j + 1 }
        else if (commandArray[j] == "[") { counter++ }
        else if (commandArray[j] == "]") { counter-- }
    }
}
function findOpener(index, commandArray) {
    let counter = 0
    for (let j = index - 1; j >= 0; j--) {
        if (counter == 0 && commandArray[j] == "[") { return j + 1 }
        else if (commandArray[j] == "]") { counter++ }
        else if (commandArray[j] == "[") { counter-- }
    }
}