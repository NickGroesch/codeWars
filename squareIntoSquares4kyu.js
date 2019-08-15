function decompose(n) {
    let max = n * n
    let left = max
    let trial = n - 1
    let answer = []
    let unsolved = true
    while (unsolved) {
        for (let i = trial; i > 0; i--) {
            if (left - i * i >= 0) {
                answer.unshift(i)
                left = left - i * i
            }

        }
        if (left == 0) { return answer } else {
            answer.length = 0
            trial -= 1
            left = max
        }
        if (trial == 0) { return null }
    }
}
