import Graph from "./graph";
import MinHeap from "./minHeap";
import HeapNode from "./heapNode";

function initialization(graph: Graph): any{
    let key: number[] = [];
    let parents: number[] = [];
       
    for(let index = 1; index <= graph.getNumberOfNodes(); index++){
        key[index] = Infinity;
        parents[index] = null;
    }
    return [key, parents]
}

function createPriorityQueue(graph: Graph, key: number[]): MinHeap{
    let minHeap = new MinHeap();

    for(let index = 1; index <= graph.getNumberOfNodes(); index++)
        minHeap.insert(new HeapNode(index, key[index]));

    return minHeap;
}

function prim(graph: Graph, startingNode: number): any{
    let key: number[];// Peso minimo di un qualsiasi lato che connette un nodo all'albero
    let parents: number[];// Rappresenta il padre del nodo nell'albero
    
    [key, parents] = initialization(graph);
    key[startingNode] = 0;

    let priorityQueue = createPriorityQueue(graph, key);

    while(!priorityQueue.isEmpty()){
        let current = priorityQueue.extractMin();
        let adjacentOfCurrent = graph.getAdjacentNodesOf(current.node);

        adjacentOfCurrent.forEach(node =>{
            if(priorityQueue.contains(node) && graph.weightBetween(current.getNode(), node) < key[node]){
                parents[node] = current.getNode();
                key[node] = graph.weightBetween(current.getNode(), node);
                priorityQueue.update(node, key[node]);
            }
        })
    }
    return [key, parents]
}

export default prim;