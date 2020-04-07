"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//========================================================================================
/*                                                                                      *
 * Metodi utilizzati per la lettura e gestione delle informazioni che compongono        *
 * il dataset di grafi reso disponibile in formato .txt.                                *
 *                                                                                      *
 * Un grafo è rappresentato in questo modo:                                             *
 * [numero_di_vertici] [numero_di_archi]                                                *
 * [un_vertice_arco_1] [altro_vertice_arco_1] [peso_arco_1]                             *
 * [un_vertice_arco_2] [altro_vertice_arco_2] [peso_arco_2]                             *
 * [un_vertice_arco_3] [altro_vertice_arco_3] [peso_arco_3]                             *
 * ...                                                                                  *
 *                                                                                      */
//========================================================================================
var fs_1 = __importDefault(require("fs"));
var adjacency_list_1 = __importDefault(require("./adjacency_list"));
//──── Methods ───────────────────────────────────────────────────────────────────────────
function getFileNames() {
    var fileNameList = new Array();
    fs_1.default.readdirSync("mst_dataset").forEach(function (fileName) {
        fileNameList.push(fileName);
    });
    return fileNameList;
}
function createGraphsFromFile() {
    var fileNameList = getFileNames();
    var graphList = new Array();
    fileNameList.forEach(function (graphFileName) {
        var adjacencyList = new adjacency_list_1.default();
        var graphDescription = fs_1.default.readFileSync("mst_dataset/" + fileNameList[1], "utf8"); //TODO fileNameList sotituire con graphFileName
        adjacencyList.createAdjacencyList(graphDescription);
        graphList.push(adjacencyList);
    });
    return graphList;
}
var g = createGraphsFromFile();
console.log(g[0].sortWeights());
console.log(g[0].weightBetween(2, 1));
