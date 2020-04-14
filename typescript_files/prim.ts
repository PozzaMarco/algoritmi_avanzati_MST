import Graph from "./graph";
import Edge from "./edge";
import MinHeap from "./minHeap";

function initialization(graph: Graph): any{
    let key: number[];
    let parents: number[];
       
    for(let index = 0; index < graph.getNumberOfNodes(), index++){
        key[index] = Infinity;
        parents[index] = null;
    }
    return [key, parents]
}

function createPriorityQueue(graph: Graph, key: number[]): MinHeap{
    return new MinHeap();
}
function prim(graph: Graph, startingNode: number): Array<Edge>{
    let key: number[];// Peso minimo di un qualsiasi lato che connette un nodo all'albero
    let parents: number[];// Rappresenta il padre del nodo nell'albero
    
    [key, parents] = initialization(graph);
    key[startingNode] = 0;

    let priorityQueue = createPriorityQueue(graph, key);
}