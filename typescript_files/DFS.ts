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

//Old implementation where the loop goes until all nodes are visited
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

//new implementation where the loop ends when the first backEdge is found
function improvedIsAcyclic(graph: Graph){
    const nodes = Array.from(graph.getList().keys());

    nodes.forEach(node => {
        visited[node] = false;
        parent[node] = NaN;
    });
    cycleDetected = false;
    let isAcyclic = true;
    edgeLabel = {};

    for(let i = 0; i < nodes.length; i++){
        if(visited[nodes[i]] == false)
            if(detectCycle(graph, nodes[i]))
                return isAcyclic = false;
    }
    return isAcyclic;
}

function improvedDetectCycle(graph: Graph, currentNode: number): boolean{
    visited[currentNode] = true;

    let adjacentNodes = graph.getAdjacentNodesOf(currentNode);
    for(let i = 0; i < adjacentNodes.length; i++){
        if(edgeLabel[currentNode+"_"+adjacentNodes[i]] == null){
            if(visited[adjacentNodes[i]] == false){
                edgeLabel[currentNode+"_"+adjacentNodes[i]] = "DiscoveryEdge";
                parent[adjacentNodes[i]] = currentNode;
                return cycleDetected = detectCycle(graph, adjacentNodes[i]);
            }
            else
                if(parent[currentNode] == adjacentNodes[i])
                    edgeLabel[currentNode+"_"+adjacentNodes[i]] = "ParentRelation";
                else{
                    edgeLabel[currentNode+"_"+adjacentNodes[i]] = "BackEdge";
                    return true;
                }
        } 
    }
}

function getLabeledEdges(): any{
    return edgeLabel;
}

export {
    getLabeledEdges,
    DFS,
    isAcyclic
}