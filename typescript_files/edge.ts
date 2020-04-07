//========================================================================================
/*                                                                                      *
 * Classe che rappresenta un lato tra due nodi. I campi dati sono:                      *
 * - Nodo partenza                                                                      *
 * - Nodo arrivo                                                                        *
 * - Peso del lato                                                                      *
 *                                                                                      *
 * Contiene anche una serie di metodi di utility tra cui la ridefinizione di compare    *
 * per permettere il sorting dell'array di lati che verrà creato nell'adjacency list.   *
 *                                                                                      */
//========================================================================================
export default class Edge {
  firstNode: number;
  secondNode: number;
  weight: number;

  constructor() {
    this.firstNode = this.secondNode = this.weight = NaN;
  }

  getEdge(): Object {
    return {
      firstNode: this.firstNode,
      secondNode: this.secondNode,
    };
  }

  getWeight(): number {
    return this.weight;
  }

  createNewEdge(firstNode: number, secondNode: number, weight: number) {
    this.firstNode = firstNode;
    this.secondNode = secondNode;
    this.weight = weight;
  }

  equalTo(firstNode: number, secondNode: number): boolean {
    return (firstNode == this.firstNode || firstNode == this.secondNode) &&
      (secondNode == this.firstNode || secondNode == this.secondNode);
  }
}