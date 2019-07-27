assemblerInterpreter = (program) => {
    // way harder than last version!
    // first we have to parse the program into instructions
    let instructions = program.split("\n")
    let trimstructions = instructions.map(x => x.trim())
    console.log(program)
    console.log(instructions)
    console.log(trimstructions)
    // we need to work the label logic, similar to hoisting/or variable naming (call, ret, jmp)
    // msg, end, ;comments
    let maths = ["mov", "add", "sub", "mul", "div", "cmp"]
    let comparitors = ["jne", "je", "jge", "jg", "jl", "jle"]


    // 
    let registers = {}
    let i = 0
    while (i < trimstructions.length) {
        // instruction = program[i]
        parts = trimstruction[i].split(" ")
        if (maths.includes(parts[0])) { parts[1] = parts[1][0] }//this cleans the comma-but may not allow multidigit nums
        console.log(parts)
        switch (parts[0]) {
            case "mov":
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] = parts[2]
                } else {
                    registers[parts[1]] = registers[parts[2]]
                }
                i++
                break;
            case "add":
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] += parts[2]
                } else {
                    registers[parts[1]] += registers[parts[2]]
                }
                i++
                break;
            case "sub":
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] -= parts[2]
                } else {
                    registers[parts[1]] -= registers[parts[2]]
                }
                i++
                break;
            case "mul":
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] *= parts[2]
                } else {
                    registers[parts[1]] *= registers[parts[2]]
                }
                i++
                break;
            case "div":
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] /= parts[2]
                } else {
                    registers[parts[1]] /= registers[parts[2]]
                }
                i++
                break;
            case "cmp"://this will need some serious work
                if (!isNaN((parts[2]) % 1)) {
                    registers[parts[1]] /= parts[2]
                } else {
                    registers[parts[1]] /= registers[parts[2]]
                }
                i++
                break;
            case "inc":
                registers[parts[1]]++
                i++
                break;
            case "dec":
                registers[parts[1]]--
                i++
                break;
            case "add":
                registers[parts[1]] +=
                    i++
                break;
            // case "jnz":
            //     if (registers[parts[1]] != 0) {
            //         i += parseInt(parts[2])
            //     } else { i++ }
            //     break;
        }
        console.log(i, registers)
    };
    // return registers
}

assemblerInterpreter(`; My first program
mov  a, 5
inc  a
call function
msg  '(5+1)/2 = ', a    ; output message
end

function:
    div  a, 2
    ret`)