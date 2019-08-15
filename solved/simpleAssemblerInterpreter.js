simple_assembler = (program) => {
    let registers = {}
    let i = 0
    while (i < program.length) {
        instruction = program[i]
        parts = instruction.split(" ")
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
            case "inc":
                registers[parts[1]]++
                i++
                break;
            case "dec":
                registers[parts[1]]--
                i++
                break;
            case "jnz":
                if (registers[parts[1]] != 0) {
                    i += parseInt(parts[2])
                } else { i++ }
                break;
        }
        console.log(i, registers)
    };
    return registers
}
simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a'])
// console.log(typeof parseInt("a"))
// console.log(typeof (("a") % 1))
// console.log(("a" % 1))
// console.log(("1" % 1))