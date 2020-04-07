//! STRUTTURA DATI NON PIU UTILIZZATA
//========================================================================================
/*                                                                                      *
 * Struttura dati utilizzata per modellare i lati e i pesi tra due nodi.                *
 * Il tutto viene implementato utilizzando una mappa in cui:                            *
 * - il primo valore rappresenta un nodo;                                               *
 * - il secondo valore è una mappa che contiene il nodo collegato ed il peso.           *
 *                                                                                      */
//========================================================================================


export default class EdgesMap {
  edgesMap: Map<number, Map<number, number>>;

  constructor() {
    this.edgesMap = new Map<number, Map<number, number>>();
  }

  getEdges(): Map<number, Map<number, number>>{
    return this.edgesMap;
  }

  createEdgesMap(firstNode: number, secondNode: number, weight: number) {
    if (!isNaN(firstNode)) {
      if (!this.edgesMap.has(firstNode))
        this.edgesMap.set(firstNode, new Map<number, number>());

      let firstNodesEdges = this.edgesMap.get(firstNode);
      firstNodesEdges.set(secondNode, weight);

      this.edgesMap.set(firstNode, firstNodesEdges);
    }
  }

  //Return a number that is the weight of the edge between first and second. NaN otherwise
  //========================================================================================
  /*                                                                                      *
  * Since the graphs are undirected, in order to avoid data duplication and the creation *
  * of a huge redundant data structure, I decided to mantain the rappresentation given by*
  * the examples so, when you need to get the weight between two nodes (V and U) only    *
  * one of these two will be the key node of the map.                                    *
  * In order to get the right weight I get the weight between (V,U) and also between     *
  * (U,V).                                                                               *
  * Since the graphs are undirected W(U,V) == W(V,U). In the data structure, one edge    *
  * will be NaN and one will be the right weight.                                        *
  * That's why I get both weight and mantain the one that is not NaN.                    *
  * If both are NaN means that there is no edge between U and V.                         *
  * If both are numbers I mantain the lower.                                             *
  *                                                                                      */
  //========================================================================================

  weight(firstNode: number, secondNode: number): number {
      let firstWeight = undefined;
      let secondWeight = undefined;
    
      if(this.edgesMap.has(firstNode)){
        firstWeight = this.edgesMap.get(firstNode).get(secondNode)
      }

      if(this.edgesMap.has(secondNode)){
        secondWeight = this.edgesMap.get(secondNode).get(firstNode)
      }

      if(firstWeight != undefined && secondWeight != undefined)
        return Math.min(firstWeight, secondWeight);
      else
        return (firstWeight != undefined) ? firstWeight : ((secondWeight != undefined) ? secondWeight : NaN)
  }

  //True if there is an edge between first and second. False otherwise
  edgeBetween(firstNode: number, secondNode: number): boolean{
    return !isNaN(this.weight(firstNode, secondNode))
  }
}
