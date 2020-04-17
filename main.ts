import Graph from "./typescript_files/graph";
import createGraphsFromFile from "./typescript_files/dataset_utility_methods";
import prim from "./typescript_files/prim";
import {kruskal, kruskalNaive} from "./typescript_files/kruskal";

import MinHeap from "./typescript_files/minHeap";

let graph = createGraphsFromFile()[0];
let priorityQueue: MinHeap;
let keys, parents : number[];

[keys, parents, priorityQueue] = prim(graph, 1);

console.log("//──── Graph ─────────────────────────────────────────────────────────────────────────────");
console.log(graph)

console.log("//──── Keys ──────────────────────────────────────────────────────────────────────────────");
console.log(keys);

console.log("//──── Parents ───────────────────────────────────────────────────────────────────────────")
console.log(parents);

console.log("//──── PriorityQueue ─────────────────────────────────────────────────────────────────────")
console.log(priorityQueue);

let totalWeight = 0;

for(let i = 1; i < keys.length; i++){
    totalWeight = totalWeight + keys[i];
    console.log("node ----- weight ----- parent")
    console.log(i + " : " + keys[i] + " -- " + parents[i]);
    console.log("--------------------------------")
}
console.log("TOTAL WEIGHT: " + totalWeight) 
