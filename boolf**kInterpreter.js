function boolfuck(code, input = "") {
    let tape = {}
    let commands = code.split("")
    console.log(commands)
    let pointer = 0
    let inputArray = input.split("")
    let charCodes = inputArray.map(x => x.charCodeAt(0))
    let byteInput = charCodes.map(x => {
        let byte = x.toString(2)
        while (byte.length < 8) {
            byte = "0" + byte
        }
        return byte
    })
    let littleEndian = byteInput.map(x => {
        let local = x.split("")
        return local.reverse().join("")
    })
    let bInput = littleEndian.join("")
    console.log(inputArray, charCodes, byteInput, littleEndian, bInput)
}
boolfuck("......", "I'm hot for teacher")