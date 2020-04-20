//──── Import delle componenti principali ────────────────────────────────────────────────
import fs from "fs";
import {performance} from 'perf_hooks';
import createGraphsFromFile from "./typescript_files/dataset_utility_methods";
import Graph from "./typescript_files/graph";
import Edge from "./typescript_files/edge";
import prim from "./typescript_files/prim";
import {kruskal, kruskalNaive} from "./typescript_files/kruskal";

//──── Dichiarazione componenti ──────────────────────────────────────────────────────────
let primTime, kruskalTime, kruskalNaiveTime;
let primKey, primParents, kruskalMst, kruskalNaiveMst;
let primTotalWeight, kruskalTotalWeight, kruskalNaiveTotalWeight = 0;
let fileName = "final_time_results";

let graphs = createGraphsFromFile();

//──── PRIM ──────────────────────────────────────────────────────────────────────────────
writeOnFile(fileName, "PRIM");
graphs.forEach(graph => {
    primTime = performance.now();
    [primKey, primParents] = prim(graph, 1);
    primTime = (performance.now() - primTime).toFixed(5);
    primTotalWeight = primTotalWeightCalc(primKey);
    writeOnFile(fileName, primTime + " ---- " + primTotalWeight);
});

//──── KRUSKAL NAIVE ─────────────────────────────────────────────────────────────────────
writeOnFile(fileName, "KRUSKAL NAIVE");
graphs.forEach(graph => {
    kruskalNaiveTime = performance.now();
    kruskalNaiveMst = kruskalNaive(graph);
    kruskalNaiveTime = (performance.now() - kruskalNaiveTime).toFixed(5);
    kruskalNaiveTotalWeight = kruskalNaiveMst.getGraphTotalWeight()
    writeOnFile(fileName, kruskalNaiveTime + " ---- " + kruskalNaiveTotalWeight);
});

//──── KRUSKAL ───────────────────────────────────────────────────────────────────────────
writeOnFile(fileName, "KRUSKAL");
graphs.forEach(graph => {
    kruskalTime = performance.now();
    kruskalMst = kruskal(graph);
    kruskalTime = (performance.now() - kruskalTime).toFixed(5);
    kruskalTotalWeight = kruskalTotalWeightCalc(kruskalMst);
    writeOnFile(fileName, kruskalTime + " ---- " + kruskalTotalWeight);
});




//──── Utility functions ─────────────────────────────────────────────────────────────────
function writeOnFile(fileName: string, text: string){
    fs.appendFile(fileName+".txt", text+"\r\n", function(err) {
        if (err)
            return console.error(err);  
    });
}

function primTotalWeightCalc(primKey: number[]): number{
    let weight = 0;

    primKey.forEach(key => {
        weight = weight + key;
    });

    return weight;
}

function kruskalTotalWeightCalc(kruskalMstEdges: Array<Edge>): number{
    let weight = 0;
    
    kruskalMstEdges.forEach(edge => {
        weight = weight + edge.getWeight();
    });

    return weight;
}


