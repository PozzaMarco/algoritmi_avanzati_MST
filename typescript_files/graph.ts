//========================================================================================
/*                                                                                      *
 * Modella le liste di adiacenza che rappresentano i singoli grafi.                     *
 * Oltre alla lista di adiacenza vera e propria, teniamo traccia anche del              *
 * numero di nodi e di archi nel grafo                                                  *
 *                                                                                      */
//========================================================================================
import Edge from "./edge";

export default class Graph {
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
    let found : boolean = false;

    for(let index = 0; index < this.numberOfEdges && !found; index++){
      if(this.edgeList[index].equalToNodes(firstNode,secondNode)){
        minWeight = this.edgeList[index].weight;
        found = true;
      }
    }

    return minWeight
  }

  //Check if there is an edge between firstNode and secondNode
  areNodeConnected(firstNode: number, secondNode: number): boolean {
    return this.weightBetween(firstNode, secondNode) != Infinity ? true : false;
  }
  
  getSortedWeights(): Array<Edge> {
    return this.edgeList.sort(
      (a: Edge, b: Edge) => a.getWeight() - b.getWeight()
    );
  }

  addToAdjacencyList(node: number, adjacentNode: number) {
    if (!this.adjacencyList.has(node))
      //If node not in adjacency list
      this.adjacencyList.set(node, []); // node is added

    //Push a new adjacentNode into node's adjacent list
    if(!this.adjacencyList.get(node).includes(adjacentNode))
      this.adjacencyList.get(node).push(adjacentNode);
  }

  createGraph(graphDescription: string) {
    //Split graphDescription in lines and iterate through them to create the adjacency list
    let descriptionLines = graphDescription.split("\n");

    //Get and remove the first element of the descriptionLines that describe the graphDimensions
    let graphDimensions = descriptionLines.shift().split(" ");
    this.numberOfNodes = parseInt(graphDimensions[0]);

    descriptionLines.forEach((line) => {
      let nodeValues = line.split(" "); //Split lines into node values

      if (!isNaN(parseInt(nodeValues[0]))) {
        this.addToAdjacencyList(parseInt(nodeValues[0]), parseInt(nodeValues[1]));
        this.addToAdjacencyList(parseInt(nodeValues[1]), parseInt(nodeValues[0]));

        let newEdge = new Edge();
        newEdge.createNewEdge(parseInt(nodeValues[0]), parseInt(nodeValues[1]),parseInt(nodeValues[2]));
        this.insertNewEdge(newEdge);
      }
    });
    this.numberOfEdges = this.edgeList.length;
  }

  getAdjacentNodesOf(node: number): number[] {
    let adjacentNodeList: number[] = null;

    if (this.adjacencyList.has(node))
      adjacentNodeList = this.adjacencyList.get(node);

    return adjacentNodeList;
  }

  getGraphTotalWeight(): number{
    let totalWeight : number = 0;

    this.edgeList.forEach(edge => {
      totalWeight += edge.weight;
    });

    return totalWeight;
  }

  insertNewEdge(newEdge: Edge){
    let found : boolean = false;

    for(let index = 0; index < this.edgeList.length && !found; index++){
      if(newEdge.equalTo(this.edgeList[index]) && newEdge.isLighter(this.edgeList[index])){
        this.edgeList[index].weight = newEdge.weight;
        found = true;
      }
    }
    if(!found)
      this.edgeList.push(newEdge);
  }

  removeLastEdge(firstNode: number){
    this.adjacencyList.get(firstNode).pop();

    if(this.adjacencyList.get(firstNode).length == 0)
      this.adjacencyList.delete(firstNode)
  }

  isAcyclic(): boolean{
    return true;
  }
}
