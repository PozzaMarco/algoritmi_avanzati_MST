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
import fs from "fs";
import Graph from "./graph";

//──── Methods ───────────────────────────────────────────────────────────────────────────
function getFileNames(): Array<string> {
  let fileNameList: Array<string> = new Array();

  fs.readdirSync("test_dataset").forEach((fileName) => {//TODO: change directory
    fileNameList.push(fileName);
  });
  return fileNameList;
}

function createGraphsFromFile() {
  let fileNameList = getFileNames();
  let graphList = new Array<Graph>();

  fileNameList.forEach((graphFileName) => {
    let graph = new Graph();

    let graphDescription = fs.readFileSync(
      "test_dataset/" + graphFileName,//TODO: change directory
      "utf8"
    );

    graph.createGraph(graphDescription);
    graphList.push(graph);
  });
  return graphList;
}

export default createGraphsFromFile