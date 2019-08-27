
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


function recoverSecret(tripArray) {
    class Graph {
        constructor(noOfVertices) {
            this.noOfVertices = noOfVertices
            this.AdjList = new Map();
            this.depList = new Map();
            this.globPath
            this.starter
        }
        addVertex(v) {
            this.AdjList.set(v, [])
        }
        addDirectedEdge(v, w) {// v= source, w=destingation
            this.AdjList.get(v).push(w)
        }
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
        removeElement(uniqueArray, elementToRemove) {
            let index = uniqueArray.indexOf(elementToRemove)
            uniqueArray.splice(index, 1)
        }
        findStarter() {
            const nodes = []
            for (let edge of this.AdjList) {
                nodes.push(edge[0])
            }
            for (let edge of this.AdjList) {
                console.log(edge[1])
                edge[1].forEach(destination => {
                    if (nodes.includes(destination)) {
                        this.removeElement(nodes, destination)
                    }
                })
            }
            console.log(nodes)
            this.starter = nodes[0]
        }
        findPath() {
            const nodes = []
            const visited = {}
            for (let edge of this.AdjList) {
                visited[edge[0]] = false
                nodes.push(edge[0])
            }
            for (let i = 0; i < nodes.length; i++) {
                let path = [this.starter]
                visited[this.starter] = true
                const node = nodes[i]
                const localVisited = JSON.parse(JSON.stringify(visited))
                this._pathUtil(node, localVisited, path)
            }
        }
        _pathUtil(vertex, visited, path) {
            // while (!this.globPath) {this isn't working, it is hanging up on first pass
            if (!visited[vertex]) {
                visited[vertex] = true
                let localPath = new Array(...path)
                localPath.push(vertex)
                if (localPath.length == this.noOfVertices) {
                    this.globPath = localPath
                }
                let neighbors = this.AdjList.get(vertex)
                for (let i = 0; i < neighbors.length; i++) {
                    const localVisited = JSON.parse(JSON.stringify(visited))
                    const neighbor = neighbors[i]
                    this._pathUtil(neighbor, localVisited, localPath)
                }
            }
            // }
        }

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
    secretGraph.findStarter()
    console.log(secretGraph.starter)
    secretGraph.findPath()
    return secretGraph.globPath.join("")
}
