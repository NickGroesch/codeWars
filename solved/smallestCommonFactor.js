function scf(array) {
    array.sort((a, b) => a - b)
    for (let i = 2; i <= array[0]; i++) {
        let checks = array.length
        array.forEach(element => {
            if (element % i == 0) {
                checks--
            }
        });
        if (checks == 0) { return i }
    }
    return 1;
}
