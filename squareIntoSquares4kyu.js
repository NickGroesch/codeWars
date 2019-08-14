function decompose(n) {
    let max = n * n
    let left = max
    let trial = n - 1
    let answer = []
    while (left >= 0) {
        if (left - trial ^ 2 >= 0) {
            answer.unshift(trial)
            left = left - trial ^ 2
            console.log(`at ${i} we have ${left} left`)
        }
    }



    //   for(var i=n-1;i>0;i--){
    //       if (left-i*i>=0){
    //         answer.unshift(i)
    //         left=left-i*i
    //         console.log(`at ${i} we have ${left} left`)
    //       }

    //   }
    //   if(left==0){return answer}else{ return null}
    // //   return answer
}