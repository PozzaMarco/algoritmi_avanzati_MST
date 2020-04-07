//========================================================================================
/*                                                                                      *
 * Modella le liste di adiacenza che rappresentano i singoli grafi.                     *
 * Oltre alla lista di adiacenza vera e propria, teniamo traccia anche del              *
 * numero di nodi e di archi nel grafo                                                  *
 *                                                                                      */
//========================================================================================
import Edge from "./edge";

export default class AdjacencyList {
  numberOfNodes: number;
  numberOfEdges: number;
  adjacencyList: Map<number, number[]>;
  edgeList: Array<Edge>;

  constructor() {
    this.numberOfEdges = this.numberOfNodes = 0;
    this.adjacencyList = new Map<number, number[]>();
    this.edgeList = new Array<Edge>();
  }

  getNumberOfNodes(): number {
    return this.numberOfNodes;
  }

  getNumberOfEdges(): number {
    return this.numberOfEdges;
  }

  getList(): Map<number, number[]> {
    return this.adjacencyList;
  }

  getEdges(): Array<Edge> {
    return this.edgeList;
  }

  weightBetween(firstNode: number, secondNode: number): number {
    let minWeight = Infinity;

    this.edgeList.forEach((edge) => {
      if (edge.equalTo(firstNode, secondNode))
        if (minWeight > edge.getWeight()) minWeight = edge.getWeight();
    });

    return minWeight == Infinity ? Infinity : minWeight;
  }

  //Check if there is an edge between firstNode and secondNode
  areNodeConnected(firstNode: number, secondNode: number): boolean {
    return this.weightBetween(firstNode, secondNode) != Infinity ? true : false;
  }
  
  sortWeights(): Array<Edge> {
    return this.edgeList.sort(
      (a: Edge, b: Edge) => a.getWeight() - b.getWeight()
    );
  }

  addToAdjacencyList(node: number, adjacentNode: number) {
    if (!this.adjacencyList.has(node))
      //If node not in adjacency list
      this.adjacencyList.set(node, []); // node is added

    //Push a new adjacentNode into node's adjacent list
    this.adjacencyList.get(node).push(adjacentNode);
  }

  createAdjacencyList(graphDescription: string) {
    //Split graphDescription in lines and iterate through them to create the adjacency list
    let descriptionLines = graphDescription.split("\n");

    //Get and remove the first element of the descriptionLines that describe the graphDimensions
    let graphDimensions = descriptionLines.shift().split(" ");
    this.numberOfNodes = parseInt(graphDimensions[0]);
    this.numberOfEdges = parseInt(graphDimensions[1]);

    descriptionLines.forEach((line) => {
      let nodeValues = line.split(" "); //Split lines into node values

      if (!isNaN(parseInt(nodeValues[0]))) {
        this.addToAdjacencyList(
          parseInt(nodeValues[0]),
          parseInt(nodeValues[1])
        );

        let newEdge = new Edge();
        newEdge.createNewEdge(
          parseInt(nodeValues[0]),
          parseInt(nodeValues[1]),
          parseInt(nodeValues[2])
        );
        this.edgeList.push(newEdge);
      }
    });
  }

  getAdjacentNodesOf(node: number): number[] {
    let adjacentNodeList: number[] = null;

    if (this.adjacencyList.has(node))
      adjacentNodeList = this.adjacencyList.get(node);

    return adjacentNodeList;
  }
}
