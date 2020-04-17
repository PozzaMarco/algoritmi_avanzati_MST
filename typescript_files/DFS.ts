//========================================================================================
/*                                                                                      *
 * Implementazione dell'algoritmo DFS per andare ad analizzare i grafi per capire se    *
 * contengono o meno cicli.                                                             *
 *                                                                                      */
//========================================================================================
import Graph from "./graph"

let visited : boolean[] = [];
let parent: number[] = [];
let edgeLabel: any = {};
let cycleDetected: boolean;

function DFS(graph: Graph){
    const nodes = Array.from(graph.getList().keys());
    nodes.forEach(node => {
        visited[node] = false;
        parent[node] = NaN;
    });
    edgeLabel = {};

    nodes.forEach(node => {
        if(visited[node] == false)
            DFSUtil(graph, node);
        
    });
}

function DFSUtil(graph: Graph, currentNode: number){
    visited[currentNode] = true;

    let adjacentNodes = graph.getAdjacentNodesOf(currentNode);

    adjacentNodes.forEach(adjacentNode => {
        if(edgeLabel[currentNode+"_"+adjacentNode] == null){
            if(visited[adjacentNode] == false){
                edgeLabel[currentNode+"_"+adjacentNode] = "DiscoveryEdge";
                parent[adjacentNode] = currentNode;
                DFSUtil(graph, adjacentNode);
            }
            else
                if(parent[currentNode] == adjacentNode)
                    edgeLabel[currentNode+"_"+adjacentNode] = "ParentRelation";
                else
                    edgeLabel[currentNode+"_"+adjacentNode] = "BackEdge"
        }       
    });
}

function isAcyclic(graph: Graph){
    const nodes = Array.from(graph.getList().keys());

    nodes.forEach(node => {
        visited[node] = false;
        parent[node] = NaN;
    });
    cycleDetected = false;
    let isAcyclic = true;
    edgeLabel = {};

    nodes.forEach(node => {
        if(visited[node] == false)
            if(detectCycle(graph, node))
                isAcyclic = false;
    });
    return isAcyclic;
}

function detectCycle(graph: Graph, currentNode: number): boolean{
    visited[currentNode] = true;

    let adjacentNodes = graph.getAdjacentNodesOf(currentNode);

    adjacentNodes.forEach(adjacentNode => {
        if(edgeLabel[currentNode+"_"+adjacentNode] == null){
            if(visited[adjacentNode] == false){
                edgeLabel[currentNode+"_"+adjacentNode] = "DiscoveryEdge";
                parent[adjacentNode] = currentNode;
                cycleDetected = detectCycle(graph, adjacentNode);
            }
            else
                if(parent[currentNode] == adjacentNode)
                    edgeLabel[currentNode+"_"+adjacentNode] = "ParentRelation";
                else{
                    edgeLabel[currentNode+"_"+adjacentNode] = "BackEdge";
                    cycleDetected = true;
                }
        }       
    });
    return cycleDetected;
}

function getLabeledEdges(): any{
    return edgeLabel;
}

export {
    getLabeledEdges,
    DFS,
    isAcyclic
}