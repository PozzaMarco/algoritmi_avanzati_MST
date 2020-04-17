import Graph from "./typescript_files/graph";
import {DFS, getLabeledEdges, isAcyclic} from "./typescript_files/DFS";
import createGraphsFromFile from "./typescript_files/dataset_utility_methods"
import { kruskalNaive } from "./typescript_files/kruskal";

/* let graph = new Graph();

/graph.addToAdjacencyList(1,2);
graph.addToAdjacencyList(2,1);

graph.addToAdjacencyList(2,3);
graph.addToAdjacencyList(3,2);

graph.addToAdjacencyList(3,4);
graph.addToAdjacencyList(4,3);

graph.addToAdjacencyList(4,5);
graph.addToAdjacencyList(5,4);

graph.addToAdjacencyList(5,6);
graph.addToAdjacencyList(6,5);

graph.addToAdjacencyList(6,7);
graph.addToAdjacencyList(7,6);

graph.addToAdjacencyList(7,8);
graph.addToAdjacencyList(8,7);

graph.addToAdjacencyList(8,9);
graph.addToAdjacencyList(9,8);

graph.addToAdjacencyList(9,10);
graph.addToAdjacencyList(10,9);

graph.addToAdjacencyList(4,9);
graph.addToAdjacencyList(9,4);

graph.addToAdjacencyList(1,5);
graph.addToAdjacencyList(5,1);

graph.addToAdjacencyList(8,6);
graph.addToAdjacencyList(6,8);

graph.addToAdjacencyList(9,1);
graph.addToAdjacencyList(1,9); 


graph.addToAdjacencyList(6,7);
graph.addToAdjacencyList(7,6);


graph.addToAdjacencyList(9,1);
graph.addToAdjacencyList(1,9);


graph.addToAdjacencyList(3,4);
graph.addToAdjacencyList(4,3);
 
graph.addToAdjacencyList(6,1);
graph.addToAdjacencyList(1,6);

graph.addToAdjacencyList(4,9);
graph.addToAdjacencyList(9,4);

graph.addToAdjacencyList(7,3);
graph.addToAdjacencyList(3,7);

console.log(graph);

if(!isAcyclic(graph))
    graph.removeLastEdgeOf(7);

console.log(graph);
console.log(isAcyclic(graph))
console.log(getLabeledEdges()) */
let graph : Graph = createGraphsFromFile()[0];
console.log(graph)

let mst = kruskalNaive(graph);
console.log(mst.getGraphTotalWeight())
