// inspired by https://www.geeksforgeeks.org/implementation-graph-javascript/
// inspired by https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, [])
    }
    addDirectedEdge(v, w) {// v= source, w=destingation
        this.AdjList.get(v).push(w)
    }
    addEdge(v, w) {//for undirected graph
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
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
    // bfs(startingNode)//breadth first search
    // dfs(startingNode)//depth first search
}

let testGraph = new Graph(6)
let testVertices = ['a', 'b', 'c', 'd', 'e', 'f']
let testEdges = [
    ['a', 'b'],
    ['a', 'd'],
    ['a', 'e'],
    ['b', 'c'],
    ['d', 'e'],
    ['e', 'f'],
    ['e', 'c'],
    ['c', 'f'],
]
testVertices.forEach(vertex => testGraph.addVertex(vertex))
testEdges.forEach(edgeArray => testGraph.addEdge(edgeArray[0], edgeArray[1]))
testGraph.printGraph()