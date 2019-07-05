function encode(input) {
  let array = input.split("")
  let counter = 1
  let encoded = ""
  array.forEach((value, index) => {
    if (value == array[index + 1]) {
      counter++
    } else {
      encoded += counter + value
      counter = 1
    }
  })
  return (encoded)
}

function decode(input) {
  // console.log("WTF", typeof (parseInt("A")))
  let decoded = ""
  //   this is insufficiently sophisticated
  let array = input.split("")
  let newArray = []
  let lastType = "letter"
  let temp = ""
  let type
  for (let i = 0; i < array.length; i++) {
    // let match = array[i].match(/[0-9]/)
    // // console.log(match)
    // match ? type = "number" : type = "letter"
    temp += array[i]
    // console.log(type)
    // need to compare next type not last type
    if (i == array.length - 1) {
      newArray.push(temp)
    }
    else {
      if (getType(array[i]) == getType(array[i + 1])) {
      } else {
        newArray.push(temp)
        temp = ""
      }
    }



    // if (type != lastType) {
    //   newArray.push(temp)
    //   temp = ""
    //   lastType = type
    // }
    console.log(newArray)
  }

  for (let i = 0; i < newArray.length; i += 2) {
    for (let j = 0; j < parseInt(newArray[i]); j++) {
      decoded += newArray[i + 1]
    }
  }
  return decoded
}
let getType = (value) => {
  let match = value.match(/[0-9]/)
  let type
  match ? type = "number" : type = "letter"
  return type
}

// console.log(decode('3A3B3C1A'))
console.log(decode(encode('AAAAAAAAAAB')), 'AAAAAAAAAAB')

// console.log("typetest", getType("A"))
// console.log("typetest", getType("0"))