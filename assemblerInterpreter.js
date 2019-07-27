assemblerInterpreter = (program) => {
    // way harder than last version
    // first we have to parse the program into instructions
    instructions = program.split("\n")
    trimstructions = instructions.map(x => x.trim())
    console.log(program)
    console.log(instructions)
    console.log(trimstructions)



    // 
    // let registers = {}
    // let i = 0
    // while (i < program.length) {
    //     instruction = program[i]
    //     parts = instruction.split(" ")
    //     console.log(parts)
    //     switch (parts[0]) {
    //         case "mov":
    //             if (!isNaN((parts[2]) % 1)) {
    //                 registers[parts[1]] = parts[2]
    //             } else {
    //                 registers[parts[1]] = registers[parts[2]]
    //             }
    //             i++
    //             break;
    //         case "inc":
    //             registers[parts[1]]++
    //             i++
    //             break;
    //         case "dec":
    //             registers[parts[1]]--
    //             i++
    //             break;
    //         case "jnz":
    //             if (registers[parts[1]] != 0) {
    //                 i += parseInt(parts[2])
    //             } else { i++ }
    //             break;
    //     }
    //     console.log(i, registers)
    // };
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