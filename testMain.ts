//──── Import delle componenti principali ────────────────────────────────────────────────
import fs from "fs";
import {performance} from 'perf_hooks';
import createGraphsFromFile from "./typescript_files/dataset_utility_methods";
import Graph from "./typescript_files/graph";
import Edge from "./typescript_files/edge";
import prim from "./typescript_files/prim";
import {kruskal, kruskalNaive} from "./typescript_files/kruskal";
import { isAcyclic, getLabeledEdges } from "./typescript_files/DFS";

//──── Dichiarazione componenti ──────────────────────────────────────────────────────────
let primTime, kruskalTime, kruskalNaiveTime;
let primKey, primParents, kruskalMst, kruskalNaiveMst;
let primTotalWeight, kruskalTotalWeight, kruskalNaiveTotalWeight = 0;
let fileName = "final_time_results";

let graphs = createGraphsFromFile()[0];
let edg = graphs.getSortedWeights();
let g = new Graph();

edg.forEach(e => {
    let [ firstNode, secondNode ] = e.getNodes();
    g.addToAdjacencyList(firstNode, secondNode);
    g.addToAdjacencyList(secondNode, firstNode);
});
console.log(graphs)
console.log(g);
console.log("IS ACYCLIC: " + isAcyclic(g))
console.log(getLabeledEdges());

