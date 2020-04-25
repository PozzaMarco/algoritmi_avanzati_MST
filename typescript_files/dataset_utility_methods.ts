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
//========================================================================================
/*                                                                                      *
 * Per eseguire il codice è necessario specificare il nome del file, dalla quale        *
 * recuperare i grafi sia, in getFileNames() sia che in createGraphsFromFile().         *
 * I nomi dei file sono:                                                                *
 * -- mst_dataset_first_part                                                            *
 * -- mst_dataset_second_part                                                           *
 * -- mst_dataset_third_part                                                            *
 * -- mst_dataset_fourth_part                                                           *
 * -- mst_dataset_fifth_part                                                            *
 *                                                                                      */
//========================================================================================

import fs from "fs";
import Graph from "./graph";

//──── Methods ───────────────────────────────────────────────────────────────────────────
function getFileNames(): Array<string> {
  let fileNameList: Array<string> = new Array();

  fs.readdirSync("mst_dataset/mst_dataset_first_part").forEach((fileName) => {
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
      "mst_dataset/mst_dataset_first_part/" + graphFileName,
      "utf8"
    );
    
    graph.setName(graphFileName.substring(0, graphFileName.length - 4));
    graph.createGraph(graphDescription);
    graphList.push(graph);
  });
  return graphList;
}

export default createGraphsFromFile