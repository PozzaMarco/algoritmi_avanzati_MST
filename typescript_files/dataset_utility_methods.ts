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
import AdjacencyList from "./adjacency_list";
import { create } from "domain";

//──── Methods ───────────────────────────────────────────────────────────────────────────
function getFileNames(): Array<string> {
  let fileNameList: Array<string> = new Array();

  fs.readdirSync("mst_dataset").forEach((fileName) => {
    fileNameList.push(fileName);
  });
  return fileNameList;
}

function createGraphsFromFile() {
  let fileNameList = getFileNames();
  let graphList = new Array<AdjacencyList>();

  fileNameList.forEach((graphFileName) => {
    let adjacencyList = new AdjacencyList();

    let graphDescription = fs.readFileSync(
      "mst_dataset/" + fileNameList[1],
      "utf8"
    );//TODO fileNameList sotituire con graphFileName

    adjacencyList.createAdjacencyList(graphDescription);
    graphList.push(adjacencyList);
  });
  return graphList;
}
