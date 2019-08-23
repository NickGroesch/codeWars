// var recoverSecret = function (triplets) {
//     let secretWord = triplets.shift()
//     let interpolated = false
//     let solved = false
//     let currentMarker = 0
//     while (!solved) {
//         while (!interpolated) {
//             console.log(secretWord)
//             console.log(triplets)
//             console.log(currentMarker)
//             if (secretWord.includes(triplets[currentMarker][0]) && secretWord.includes(triplets[currentMarker][2])) {
//                 secretWord.splice(secretWord.indexOf(triplets[currentMarker][0]) + 1, 0, triplets[currentMarker][1])
//                 triplets.splice(currentMarker, 1)
//                 currentMarker = 0
//             } else { currentMarker++ }
//             if (currentMarker == triplets.length) {
//                 currentMarker = 0
//                 interpolated = true
//             }
//         }
//         // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
//         //     solved = true
//         //     break
//         // }
//         // if (secretWord.includes(triplets[0][2])) {
//         //     secretWord.unshift(triplets[0][0])
//         //     interpolated = false
//         // }
//         // if (secretWord.includes(triplets[0][0])) {
//         //     secretWord.push(triplets[0][2])
//         //     interpolated = false
//         // }
//         // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
//         //     solved = true
//         // }
//         // if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
//         if (triplets.length == 0) {
//             solved = true
//             break
//         }
//         if (secretWord.includes(triplets[0][2])) {
//             secretWord.unshift(triplets[0][0])
//             interpolated = false
//         } else
//             if (secretWord.includes(triplets[0][0])) {
//                 secretWord.push(triplets[0][2])
//                 interpolated = false
//             } else if (secretWord.includes(triplets[0][1])) {
//                 secretWord.push(triplets[0][2])
//                 secretWord.unshift(triplets[0][0])
//                 interpolated = false
//             }
//         // else { triplets.push(triplets.shift()) }
//     }


//     return Array.from(new Set(secretWord)).join("")
// }





//       console.log("extrapolation time")
// if (!triplets.length || triplets.length == 1 && secretWord.includes(triplets[0][0]) && secretWord.includes(triplets[0][1]) && secretWord.includes(triplets[0][2])) {
//     solved = true
//     break
// }
// if (secretWord.includes(triplets[0][2])) {
//     secretWord.unshift(triplets[0][0])
//     interpolated = false
// }else 
// if (secretWord.includes(triplets[0][0])) {
//     secretWord.push(triplets[0][2])
//     interpolated = false
// } else if  (secretWord.includes(triplets[0][1])){
//   secretWord.push(triplets[0][2])
//   secretWord.unshift(triplets[0][0])
//   }else{triplets.push(triplets.shift())}
// }
secret1 = "whatisup"
triplets1 = [
    ['t', 'u', 'p'],//0 tup
    ['w', 'h', 'i'],
    ['t', 's', 'u'],//1 tsup
    ['a', 't', 's'],//3 atisup
    ['h', 'a', 'p'],//
    ['t', 'i', 's'],//2 tisup
    ['w', 'h', 's']
]
console.log(recoverSecret(triplets1))








// function recoverSecret(tripArray) {
//     let anOb = {}
//     tripArray.forEach(triplet => {
//         triplet.forEach((letter, index) => {
//             if (!anOb[letter]) { anOb[letter] = {} }
//             if (!anOb[letter][index]) { anOb[letter][index] = 1 } else { anOb[letter][index]++ }
//         })
//     })
//     console.log(anOb)//now we have some analytics to begin our deduction
//     // let beginning = ""
//     // let end = ""
//     let totalLetters = 0
//     let unplacedLetters = []
//     for (let letter in anOb) {
//         unplacedLetters.push(letter)
//         totalLetters++
//         let letterCount = 0
//         let value = 0
//         for (let index in anOb[letter]) {
//             letterCount += anOb[letter][index]
//             index == '0' ? value -= anOb[letter][index] : index == "2" ? value += anOb[letter][index] : value += 0;
//         }
//         // if (!anOb[letter]["2"] && !anOb[letter]["1"]) {//this isn't rigorous
//         //     console.log(`${letter} must be the beginning`)
//         //     beginning = letter
//         // }
//         // if (!anOb[letter]["0"] && !anOb[letter]["1"]) {//this isn't rigorous, but a start
//         //     console.log(`${letter} must be the end`)
//         //     end = letter
//         // }
//         anOb[letter].solved = false
//         anOb[letter].count = letterCount
//         anOb[letter].value = value
//         anOb[letter].comesBefore = []
//         anOb[letter].comesAfter = []
//     }
//     tripArray.forEach(triplet => {
//         let first = triplet[0]
//         let second = triplet[1]
//         let third = triplet[2]
//         anOb[first].comesBefore.push(second, third)
//         anOb[third].comesAfter.push(second, first)
//         anOb[second].comesBefore.push(third)
//         anOb[second].comesAfter.push(first)
//     })
//     for (let letter in anOb) {
//         anOb[letter].comesBefore = new Array(... new Set(anOb[letter].comesBefore))
//         anOb[letter].comesAfter = new Array(... new Set(anOb[letter].comesAfter))
//         anOb[letter].comesBeforeCount = anOb[letter].comesBefore.length
//         anOb[letter].comesAfterCount = anOb[letter].comesAfter.length
//         anOb[letter].balance = anOb[letter].comesAfterCount - anOb[letter].comesBeforeCount
//         anOb[letter].implications = anOb[letter].comesAfterCount + anOb[letter].comesBeforeCount
//         anOb[letter].middleness = anOb[letter].implications - Math.abs(anOb[letter].balance)//a middleness of 2 (or 0) seems to be part of the mechanics of generating the minimum triplets that define a graph
//     }
//     console.log(anOb)//now we have hella analytics to make our deduction
//     // console.log(beginning)//may have to go
//     // console.log(end)//may have to go
//     console.log(totalLetters)
//     console.log(unplacedLetters)
//     console.log("-----------------------")
//     // find a triplet that doesn't contain beginning or end
//     // let sortedArray = []
//     // for (let i = 0; i < tripArray.length; i++) {//find a triplet that doesn't include beginning or end to seed our sorted array
//     //     if (tripArray[i].indexOf(beginning) == -1 && tripArray[i].indexOf(end) == -1) {
//     //         sortedArray = tripArray[i]
//     //         break
//     //     }
//     // }
//     let sortedArray = tripArray[0]
//     sortedArray.forEach(letter => removeElement(unplacedLetters, letter))
//     // sortedArray.push(end)
//     // removeElement(unplacedLetters, end)
//     // sortedArray.unshift(beginning)
//     // removeElement(unplacedLetters, beginning)
//     console.log(sortedArray, unplacedLetters)

//     // go through the unplaced letters and fit them somewhere
//     let counter = 0
//     // while (unplacedLetters.length > 0) {//the real one
//     // while (counter <= 10) {
//     while (counter <= unplacedLetters.length) {
//         let currentLetter = unplacedLetters[counter]
//         let facts = anOb[currentLetter]
//         console.log(currentLetter)
//         //lets use the Array.some()methods
//         for (let i = 0; i < sortedArray.length; i++) {

//             let before = sortedArray.slice(0, i + 1)
//             let after = sortedArray.slice(i)
//             if (before.some(x => facts.comesBefore.includes(x))) {
//                 console.log("it doesn't belong", before, facts.comesAfter)
//             } else if (after.some(x => facts.comesAfter.includes(x))) {
//                 console.log("it doesn't belong", after, facts.comesBefore)
//             }
//             else {
//                 console.log("it does belong")
//                 sortedArray.splice(i, 0, currentLetter)
//                 removeElement(unplacedLetters, currentLetter)
//                 break
//             }
//         }
//         console.log(sortedArray, unplacedLetters, counter)
//         counter += 1//testing
//         // counter = (counter + 1) % unplacedLetters.length//the real one
//     }
//     return sortedArray.join("")

// }
// function removeElement(uniqueArray, elementToRemove) {
//     let index = uniqueArray.indexOf(elementToRemove)
//     uniqueArray.splice(index, 1)
// }


// funky fresher start on the problem as a Graph



function recoverSecret(tripArray) {
    class Graph {
        constructor(noOfVertices) {
            this.noOfVertices = noOfVertices
            this.AdjList = new Map();
            this.globPath
        }
        addVertex(v) {
            this.AdjList.set(v, [])
        }
        addDirectedEdge(v, w) {// v= source, w=destingation
            this.AdjList.get(v).push(w)
        }
        // addEdge(v, w) {//for undirected graph
        //     this.AdjList.get(v).push(w)
        //     this.AdjList.get(w).push(v)
        // }
        printGraph() {
            let get_vertices = this.AdjList.keys()
            for (let vertex of get_vertices) {
                let values = this.AdjList.get(vertex)
                let adjacencies = ""
                for (let edge of values) {
                    adjacencies += `${edge} `
                }
                console.log(`${vertex} -> ${adjacencies}`)
            }
        }
        // bfs(startingNode)//breadth first search
        // dfs(startingNode)//depth first search
        findPath() {
            const nodes = []
            const visited = {}
            for (let edge of this.AdjList) {
                visited[edge[0]] = false
                nodes.push(edge[0])
            }
            for (let i = 0; i < nodes.length; i++) {
                let path = []
                const node = nodes[i]
                const localVisited = JSON.parse(JSON.stringify(visited))
                this._pathUtil(node, localVisited, path)
            }
        }
        _pathUtil(vertex, visited, path) {

            if (!visited[vertex]) {
                visited[vertex] = true
                // console.log("hey", vertex, visited)
                let localPath = new Array(...path)
                localPath.push(vertex)
                // console.log(localPath)
                if (localPath.length == this.noOfVertices) {
                    this.globPath = localPath
                }
                let neighbors = this.AdjList.get(vertex)
                // console.log(neighbors)
                // if (neighbors.length) {
                for (let i = 0; i < neighbors.length; i++) {
                    const localVisited = JSON.parse(JSON.stringify(visited))
                    const neighbor = neighbors[i]
                    this._pathUtil(neighbor, localVisited, localPath)
                }
            }
        }

        // dfs() {
        //     const nodes = []
        //     const visited = {}
        //     for (let edge of this.AdjList) {
        //         visited[edge[0]] = false
        //         nodes.push(edge[0])
        //     }
        //     // console.log(visited)
        //     console.log("wtf", nodes)
        //     for (let i = 0; i < nodes.length; i++) {
        //         const node = nodes[i]
        //         const localVisited = JSON.parse(JSON.stringify(visited))
        //         this._dfsUtil(node, localVisited)
        //     }
        // }
        // _dfsUtil(vertex, visited) {

        //     if (!visited[vertex]) {
        //         visited[vertex] = true
        //         console.log("hey", vertex, visited)
        //         const localVisited = JSON.parse(JSON.stringify(visited))
        //         let neighbors = this.AdjList.get(vertex)
        //         console.log(neighbors)
        //         // if (neighbors.length) {
        //         for (let i = 0; i < neighbors.length; i++) {
        //             const neighbor = neighbors[i]
        //             this._dfsUtil(neighbor, localVisited)
        //         }
        //         // }
        //     }
        // }
    }
    let vertices = []
    let edges = []
    tripArray.forEach(triplet => {
        triplet.forEach(letter => {
            if (!vertices.includes(letter)) { vertices.push(letter) }
        })
        if (!edges.includes(`${triplet[0]}->${triplet[1]}`)) { edges.push(`${triplet[0]}->${triplet[1]}`) }
        if (!edges.includes(`${triplet[0]}->${triplet[2]}`)) { edges.push(`${triplet[0]}->${triplet[2]}`) }
        if (!edges.includes(`${triplet[1]}->${triplet[2]}`)) { edges.push(`${triplet[1]}->${triplet[2]}`) }
    })
    let secretGraph = new Graph(vertices.length)
    vertices.forEach(vertex => secretGraph.addVertex(vertex))
    edges.forEach(edge => {
        let local = edge.split('->')
        secretGraph.addDirectedEdge(local[0], local[1])
    })
    secretGraph.printGraph()
    // function dfs(graph) {
    //     let nodes = []
    //     let visited = {}
    //     for (let edge of graph.AdjList) {
    //         visited[edge[0]] = false
    //         nodes.push(edge[0])
    //     }
    //     console.log(visited)
    //     console.log(nodes)
    // }
    // function _dfsUtil(vertex, visitedArray){
    //     if (!visitedArray[vertex]){
    //         visitedArray[vertex]=true
    //         const neighbors= this
    //     }
    // }
    // console.log("x", secretGraph.AdjList.get("t"))
    secretGraph.findPath()

    return secretGraph.globPath.join("")
}
